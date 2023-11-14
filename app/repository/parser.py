import datetime as dt
import typing as t
from contextlib import suppress

import attrs
from loguru import logger

from app.dto.annotations import WebSocketPayload
from app.dto.entities.bets import Bet
from app.dto.entities.event import Event
from app.dto.entities.sport import ESport, NoSport, Sport
from app.dto.entities.update import Update
from app.dto.enums import BetType, UpdateType
from app.repository.db.db import DB
from app.dto.regex import Regex

logger.bind(context="data_parser_v2")

SINGLE_PLAYER_EVENTS = set()


class InvalidTeamName(Exception):
    ...


class InvalidUpdate(Exception):
    ...


def get_team_from_event_name(event_name: str) -> tuple[str, str]:
    for sep in (" v ", " vs ", " @ ", " - "):
        with suppress(ValueError, AttributeError):
            team_1, team_2 = event_name.split(sep, maxsplit=1)
            return team_1, team_2

    raise InvalidTeamName(f"Can't split {event_name=} by any separator")


def get_bet_id_from_topic_id(topic_id: str) -> str:
    bet_id_match = Regex.DATA.BET_ID.findall(topic_id)
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
        _hd = t.cast(str, payload["HD"])
        _ha = t.cast(str, payload["HA"])

        if "," in _hd:
            value = _hd
        else:
            try:
                if float(_ha) != float(_hd.strip()):
                    logger.warning(f"Total {_ha=} != {_hd=}")
                    raise ValueError(f"Total {_ha=} != {_hd=}")
            except ValueError:
                logger.error(f"Invalid total {_ha=} {_hd=}")
                return None
            value = _ha

        bet_id = payload["ID"]
        event_id = t.cast(str, payload["FI"])
        odds = t.cast(str, payload["OD"])

        if None in (bet_id, event_id, odds):
            logger.error(f"Invalid bet {dict(payload)}")
            return None

        event = await self._db.get_event(event_id=event_id)

        if event.sport.name == "Basketball":
            logger.debug(f"Bet {bet_id} is basketball spread")

            spread_type = "Home" if payload["HA"].startswith("-") else "Away"

            return Bet(
                id=bet_id,
                event_id=event_id,
                odds=odds,
                bet_type=BetType.Spread,
                spread_type=spread_type,
                value=value,
                topic=payload["IT"],
            )

        total_type = {
            "0": "Over",
            "1": "Under",
        }.get(payload["OR"], "Unknown")

        return Bet(  # type: ignore[call-arg]
            id=bet_id,
            event_id=event_id,
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
            logger.error(f"Invalid bet {dict(payload)}")
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

    async def get_winner(self, payload: WebSocketPayload) -> Bet | None:
        if payload["OR"] not in ("0", "1"):
            raise ValueError(f"Invalid tennis winner {payload=}")

        player = int(payload["OR"]) + 1

        bet_id = t.cast(str, payload["ID"])
        event_id = t.cast(str, payload["FI"])
        odds = t.cast(str, payload["OD"])

        if None in (bet_id, event_id, odds):
            logger.error(f"Invalid bet {dict(payload)}")
            return None

        return Bet(  # type: ignore[call-arg]
            id=bet_id,
            event_id=str(event_id),
            odds=odds,
            bet_type=BetType.Winner,
            player=player,
            topic=payload["IT"],
        )

    async def get_bet(self, payload: WebSocketPayload) -> Bet | None:
        event_id = t.cast(str, payload["FI"])
        event = await self._db.get_event(event_id=event_id)
        if event is None:
            raise ValueError(f"Event {event_id} not found")

        if event_id in SINGLE_PLAYER_EVENTS:
            logger.debug(f"Bet is single player {dict(payload)=} {event=}")
            if payload["OR"] is not None:
                logger.debug("Parse winner")
                return await self.get_winner(payload=payload)

        if payload["HD"] is not None:
            logger.debug("Parse totals")
            return await self.get_totals(payload=payload)
        elif payload["OR"] is not None:
            logger.debug("Parse results")
            return await self.get_results(payload=payload)
        else:
            logger.error(f"Invalid bet {dict(payload)}")
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

        return Sport(id=sport_id, name=sport_name)

    async def _get_sport_from_event_id(self, event_id: str) -> Sport | None:
        _sport_id = Regex.DATA.SPORT_FROM_EVENT.findall(event_id)
        logger.warning(f"SPORT_FROM_EVENT {event_id} -> {_sport_id=}")
        sport_id = _sport_id[0] if _sport_id else None
        if _sport_id is not None:
            sport = await self._storage.get_sport(sport_id=sport_id)
            if sport is None:
                logger.info(f"Sport {sport_id} not found. Addding new sport")
                await self._storage.add_sport(sport=Sport(id=sport_id, name=None))
                sport = await self._storage.get_sport(sport_id=sport_id)
            return sport
        return None

    async def _get_esport_from_event(self, payload: WebSocketPayload) -> ESport:
        sport = await self._storage.get_esport(payload["T2"])
        return sport or NoSport

    async def get_event(self, payload: WebSocketPayload) -> Event | None:
        # assert payload["HP"] in ("0", "1", "2"), payload

        league_name = payload["CT"]
        event_name = payload["NA"]
        event_position = payload["GO"]

        event_id = payload["OI"]
        event_topic = payload["IT"]
        event_sub_id = payload["ID"]

        # assert payload["OF"] in ("00000", "11111", "111", None), payload

        try:
            team_1, team_2 = get_team_from_event_name(event_name)
        except InvalidTeamName as exc:
            logger.error(exc)
            return None

        if payload["TU"] is not None:
            event_dt = dt.datetime.strptime(payload["TU"], "%Y%m%d%H%M%S")
        else:
            logger.debug("No event date")
            event_dt = None

        if payload["ID"].endswith("C151A_1_3"):
            sport = await self._get_esport_from_event(payload)
        else:
            sport = await self._get_sport_from_event_id(payload["ID"])

            if sport is None:
                logger.error(f"Sport not found {payload['ID']=}")
                return None
            
        logger.info(f"New event: {event_id} {team_1} {team_2} {sport}")

        return Event(
            id=event_id,
            league=league_name,
            team_1=team_1,
            team_2=team_2,
            sport=sport,
            event_dt=event_dt,
        )

    async def parse_update(self, payload: WebSocketPayload) -> Bet | None:
        if payload["TU"] is not None:
            logger.debug("Update bet time update sent")
            return None
        elif payload["IT"] is not None:
            logger.debug("Update bet topic sent")
            return None

        if payload["update_type"] == "I":
            logger.info("Insert bet")
            logger.info(payload)
            return await self._bet_parser.get_bet(payload)
        if payload["update_type"] != "U":
            logger.warning(f"Unknown update type {payload['update_type']}")
            raise InvalidUpdate()

        if "OD" not in payload:
            raise InvalidUpdate()

        topic_id = payload["topic_id"].strip()

        if bet_by_topic := self._storage.get_bet_cache(topic_id):
            bet = bet_by_topic
        else:
            bet_id = str(get_bet_id_from_topic_id(topic_id))
            bet = self._storage.get_bet_cache(bet_id)
            if bet is None:
                raise InvalidUpdate()

        logger.debug(f"Bet {topic_id}")
        bet.odds = payload["OD"]
        logger.info(f"Bet {topic_id} updated")
        return bet

    async def parse_unknown_payload(self, payload: WebSocketPayload) -> None:
        if payload["NA"] is not None:
            if payload["NA"] == "Match Winner":
                event_id = payload["FI"]
                SINGLE_PLAYER_EVENTS.add(event_id)
                logger.debug(f"Event {event_id} is single player")
            elif payload["NA"] == "Fulltime Result":
                logger.debug("Fulltime Result")
        elif payload["TI"] is not None:
            logger.debug("Time info sent")
        elif payload["TR"] is not None:
            logger.debug("Event subtype sent")
        else:
            logger.error(f"Invalid payload {dict(payload)}")
        return None

    async def parse(self, /, payload: WebSocketPayload) -> Update | None:
        logger.debug(f"Parse {dict(payload)=}")

        if payload["update_type"] is not None:
            try:
                bet = await self.parse_update(payload=payload)
                if bet is not None:
                    return Update(key=UpdateType.BET, data=bet)
            except InvalidUpdate:
                logger.error(f"Invalid update bet {dict(payload)}")
            return None

        match payload["ID"] or payload["IT"]:
            case PayloadID.ENDP:
                logger.debug("ENDP sent")
                return None
            case PayloadID.P_ENDP:
                logger.success("Pull subscription connected!")
                return None

        if payload["IT"] is not None and Regex.DATA.IT_P_CONFIG.findall(payload["IT"]):
            logger.debug("P_CONFIG sent")
            return None
        elif payload["EX"] is not None:  # type: ignore
            logger.debug("API details sent")
        elif payload["HC"] is not None:
            sport = await self.get_sport(payload)  # type: ignore
            if sport is not None:
                return Update(key=UpdateType.SPORT, data=sport)
            else:
                logger.error(f"Invalid sport {dict(payload)}")
        elif payload["IT"] is not None and payload["IT"].startswith("OVDI"):
            esport = await self.get_esport(payload)
            if esport is not None:
                return Update(key=UpdateType.SPORT, data=esport)
            else:
                logger.error(f"Invalid esport {dict(payload)}")
        elif any([payload["HP"], payload["MS"], payload["CT"]]):
            event = await self.get_event(payload)
            if event is not None:
                return Update(key=UpdateType.EVENT, data=event)
            else:
                logger.error(f"Invalid event {dict(payload)}")
        elif payload["OD"] is not None:
            bet = await self._bet_parser.get_bet(payload)
            if bet is not None:
                event = await self._storage.get_event(bet.event_id)
                if event.sport.id == "13":
                    logger.debug(f"Bet {dict(payload)=} {bet=} {event=} is tennis")
                return Update(key=UpdateType.BET, data=bet)
            else:
                logger.error(f"Invalid bet {dict(payload)}")
        return await self.parse_unknown_payload(payload)
