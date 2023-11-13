import datetime as dt
import re
import typing as t
from collections import defaultdict
from contextlib import suppress

import attrs
from loguru import logger

from app.dto.annotations import WebSocketPayload
from app.dto.constants import NoSport
from app.dto.entities.bets import Bet
from app.dto.entities.event import Event
from app.dto.entities.sport import ESport, Sport
from app.dto.entities.update import Update
from app.dto.enums import BetType, UpdateType
from app.repository.db.db import DB

logger.bind(context="data_parser_v2")

TEMP = {"Sport": {}, "Events": {}, "ESport": {}}  # type: ignore

BETS: dict[str, Bet] = {}
BETS_TOPICS: dict[str, Bet] = {}
BETS_EVENTS: dict[str, Bet] = {}
BETS_UPDATES: dict[str, Bet] = {}


class InvalidTeamName(Exception):
    ...


def get_team_from_event_name(event_name: str) -> tuple[str, str]:
    for sep in (" v ", " vs ", " @ ", " - "):
        with suppress(ValueError, AttributeError):
            team_1, team_2 = event_name.split(sep, maxsplit=1)
            return team_1, team_2

    raise InvalidTeamName(f"Can't split {event_name=} by any separator")


def get_bet_id_from_topic_id(topic_id: str) -> str:
    bet_id_match = re.findall(r"(\d+)-|(\d+)[^_]+_\d+_\d+", topic_id)
    return str(bet_id_match[0][0] or bet_id_match[0][1])


class PayloadID:
    P_ENDP = "P-ENDP"
    ENDP = "ENDP"


class SportManager:
    def __init__(self, db: DB) -> None:
        self._db = db


class BetParser:
    def __init__(self, db: DB) -> None:
        self._db = db

    async def get_totals(self, payload: WebSocketPayload) -> Bet | None:
        match payload["OR"]:
            case "0":
                total_type = "Over"
            case "1":
                total_type = "Under"
            case _:
                total_type = "Unknown"

        _hd = t.cast(str, payload["HD"])
        _ha = t.cast(str, payload["HA"])

        if "," in _hd:
            value = _hd
        else:
            if float(_ha) != float(_hd.strip()):
                logger.warning(f"Total {_ha=} != {_hd=}")
                raise ValueError(f"Total {_ha=} != {_hd=}")
            value = _ha

        bet_id = payload["ID"]
        event_id = t.cast(str, payload["FI"])
        odds = t.cast(str, payload["OD"])

        if None in (bet_id, event_id, odds):
            logger.warning(f"Invalid bet {payload}")
            return None

        return Bet(  # type: ignore[call-arg]
            id=bet_id,
            event_id=str(event_id),
            # odds=number_to_string(fractional_odds_to_decimal(odds)),
            odds=odds,
            bet_type=BetType.Totals,
            total=total_type,
            value=value,
            topic=payload["IT"],
        )

    async def get_results(self, payload: WebSocketPayload) -> Bet | None:
        if payload["N2"] is not None:
            team = payload["N2"]
        else:
            match payload["OR"]:
                case "0":
                    team = "1"
                case "1":
                    team = "X"
                case "2":
                    team = "2"
                case _:
                    team = "unknown"

        bet_id = t.cast(str, payload["ID"])
        event_id = t.cast(str, payload["FI"])
        odds = t.cast(str, payload["OD"])

        if None in (bet_id, event_id, odds):
            logger.warning(f"Invalid bet {payload}")
            return None

        return Bet(  # type: ignore[call-arg]
            id=bet_id,
            event_id=str(event_id),
            # odds=number_to_string(fractional_odds_to_decimal(odds)),
            odds=odds,
            bet_type=BetType.Results,
            team=team,
            topic=payload["IT"],
        )

    async def get_bet(self, payload: WebSocketPayload) -> Bet | None:
        if payload["HD"] is not None:
            logger.debug("Parse totals")
            return await self.get_totals(payload=payload)
        elif payload["OR"] is not None:
            logger.debug("Parse results")
            return await self.get_results(payload=payload)
        else:
            logger.warning("Unknown odds...")
            return None


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class DataParserRepository:
    _bet_parser: BetParser
    _sport_manager: SportManager
    _storage: DB

    async def get_sport(self, payload: WebSocketPayload) -> Sport | None:
        assert payload["HC"] in ("10", "0"), payload  # nosec

        sport_id = payload["ID"]
        sport_topic = payload["IT"].split("_")  # type: ignore

        assert sport_topic[0] == "OV"  # nosec
        assert sport_topic[1] == sport_id  # nosec
        assert "_".join(sport_topic[2:]) == "1_3"

        sport_name = payload["NA"]

        assert payload["OF"] == "111", payload  # nosec

        sport_position = payload["OR"]

        if sport_id in TEMP:
            logger.warning(f"Sport {sport_id} already exists")

        TEMP["Sport"][sport_id] = {
            "name": sport_name,
            "topic": payload["IT"],
            "position": sport_position,
        }
        return Sport(id=sport_id, name=sport_name)

    async def get_esport(self, payload: WebSocketPayload) -> Sport | None:
        sport_sub_id = payload["ID"]

        # "OVDI-2-C151A_1_3"
        sport_subtopic = payload["IT"].split("-")  # type: ignore

        assert sport_subtopic[0] == "OVDI"
        assert sport_subtopic[1] == sport_sub_id

        sport_topic = sport_subtopic[2].split("_")

        sport_id = sport_topic[0][:-1] + "_" + "_".join(sport_topic[1:])

        sport_name = payload["NA"]
        sport_position = payload["OR"]

        TEMP["ESport"][sport_sub_id] = {
            "name": sport_name,
            "position": sport_position,
            "topic": payload["IT"],
            "sub_id": sport_sub_id,
        }

        logger.error(TEMP["ESport"])

        return Sport(id=sport_id, name=sport_name)

    async def _get_sport_from_event_id(self, event_id: str) -> Sport:
        if _sport_matches := re.search(r"C(\d+)A", event_id):
            sport_id = _sport_matches.group()[1:-1]
            return await self._storage.get_sport(sport_id=sport_id) or NoSport
        return NoSport

    async def _get_esport_from_event(self, payload: WebSocketPayload) -> ESport:
        sport = await self._storage.get_esport(payload["T2"])
        return sport or NoSport

    async def get_event(self, payload: WebSocketPayload) -> Event | None:
        assert payload["HP"] in ("0", "1", "2"), payload

        league_name = payload["CT"]
        event_name = payload["NA"]
        event_position = payload["GO"]

        event_id = payload["OI"]
        event_topic = payload["IT"]
        event_sub_id = payload["ID"]

        assert payload["OF"] in ("00000", "11111", "111", None), payload

        try:
            team_1, team_2 = get_team_from_event_name(event_name)
        except InvalidTeamName as exc:
            logger.error(exc)
            return None

        if payload["TU"] is not None:
            event_dt = dt.datetime.strptime(payload["TU"], "%Y%m%d%H%M%S")
        else:
            logger.debug(f"No event date {payload=}")
            event_dt = None

        if payload["ID"].endswith("C151A_1_3"):
            sport = await self._get_esport_from_event(payload)
        else:
            sport = await self._get_sport_from_event_id(payload["ID"])

        TEMP["Events"][event_id] = {
            "name": event_name,
            "topic": event_topic,
            "sub_id": event_sub_id,
            "team_1": team_1,
            "team_2": team_2,
            "position": event_position,
            "league_name": league_name,
            "sport": sport,
        }

        return Event(
            id=event_id,
            league=league_name,
            team_1=team_1,
            team_2=team_2,
            sport=sport,
            event_dt=event_dt,
        )

    async def parse_single_event(self, payload: WebSocketPayload) -> Update | None:
        event_name = payload["NA"]
        event_position = payload["OR"]
        event_id = payload["ID"]
        event_topic = payload["IT"]
        try:
            team_1, team_2 = get_team_from_event_name(event_name)
        except InvalidTeamName:
            return None

        TEMP["Events"][event_id] = {
            "name": event_name,
            "topic": event_topic,
            "team_1": team_1,
            "team_2": team_2,
            "position": event_position,
        }

        sport = await self._get_sport_from_event_id(payload["ID"])

        return Event(
            id=event_id,
            league=None,
            team_1=team_1,
            team_2=team_2,
            sport=sport,
            event_dt=dt.datetime.now(),
        )

    async def parse_update(self, payload: WebSocketPayload) -> Bet | None:
        def get_bet(_id):
            for storage in (BETS, BETS_TOPICS, BETS_EVENTS, BETS_UPDATES):
                if _id in storage:
                    return storage[_id]

        if payload["update_type"] == "I":
            logger.info("Insert bet")
            logger.info(payload)
            return await self._bet_parser.get_bet(payload)
        if payload["update_type"] != "U":
            logger.warning(f"Unknown update type {payload['update_type']}")
            return None

        if "OD" not in payload:
            return None

        topic_id = payload["topic_id"].strip()

        if get_bet(topic_id):
            bet = get_bet(topic_id)
        else:
            bet_id = str(get_bet_id_from_topic_id(topic_id))
            bet = get_bet(bet_id)
            if bet is None:
                logger.warning(f"Bet {topic_id} {bet_id} not found")
                logger.warning(f"{bet_id in BETS=}")
                logger.warning(f"{bet_id in BETS_EVENTS=}")
                logger.warning(f"{bet_id in BETS_TOPICS=}")
                logger.warning(f"{bet_id in BETS_UPDATES=}")
                return None

        logger.debug(f"Bet {topic_id}")
        bet.odds = payload["OD"]
        logger.info(f"Bet {topic_id} updated")
        return bet

    async def parse(self, /, payload: WebSocketPayload) -> Update | None:
        logger.debug(f"Parse {dict(payload)=}")

        if payload["update_type"] is not None:
            bet = await self.parse_update(payload=payload)
            if bet:
                return Update(key=UpdateType.BET, data=bet)
            return None

        match payload["ID"]:
            case PayloadID.ENDP:
                logger.debug("ENDP sent")
            case PayloadID.P_ENDP:
                logger.success("Pull subscription connected!")

        if None not in (payload["EX"], payload["NA"]) and payload["NA"].startswith("/"):  # type: ignore
            logger.debug("API details sent")
            assert payload["IT"] == payload["IT"].lower()  # type: ignore  # nosec
        elif payload["HC"] is not None:
            logger.info("Sport sent")
            sport = await self.get_sport(payload)  # type: ignore
            if sport is not None:
                return Update(key=UpdateType.SPORT, data=sport)
        elif payload["IT"] is not None and payload["IT"].startswith("OVDI"):
            logger.info("ESport sent")
            esport = await self.get_esport(payload)
            if esport is not None:
                return Update(key=UpdateType.SPORT, data=esport)
        elif payload["HP"] is not None:
            logger.info("League event sent")
            event = await self.get_event(payload)
            if event is not None:
                return Update(key=UpdateType.EVENT, data=event)
        elif payload["MS"] is not None:
            event = await self.parse_single_event(payload)
            if event is not None:
                logger.info("Single event sent")
                return Update(key=UpdateType.EVENT, data=event)
        elif payload["OD"] is not None:
            bet = await self._bet_parser.get_bet(payload)
            if bet is not None:
                logger.info("Bet sent")
                BETS[bet.id] = BETS_TOPICS[bet.topic] = BETS_EVENTS[bet.event_id] = bet
                return Update(key=UpdateType.BET, data=bet)
            else:
                logger.warning(f"Invalid bet {payload}")

        return None
