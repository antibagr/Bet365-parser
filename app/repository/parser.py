import datetime as dt
import typing as t
from contextlib import suppress

import attrs
from loguru import logger

from app.dto.annotations import WebSocketPayload
from app.dto.entities.bets import Bet
from app.dto.entities.event import Event
from app.dto.entities.sport import NoSport, Sport
from app.dto.entities.update import Update
from app.dto.enums import BetType, UpdateType
from app.dto.regex import Regex
from app.repository.db.db import DB

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


class BetCache:
    def __init__(self) -> None:
        self._cache: dict[str, dict[str, Bet]] = {
            "id": {},
            "topic": {},
            "event_id": {},
        }

    def add_bet_cache(self, bet: Bet) -> None:
        for key in ("id", "topic", "event_id"):
            lookup_key = getattr(bet, key)
            if lookup_key not in self._cache[key]:
                self._cache[key][lookup_key] = bet
                logger.debug(f"CACHE_ADD: {key}={lookup_key}")
            else:
                logger.debug(f"CACHE_UPDATE: {key}={lookup_key}")
                self._cache[key][lookup_key].odds = bet.odds
                self._cache[key][lookup_key].update()

    def get_bet_cache(self, bet_id: str) -> Bet | None:
        for key in ("id", "topic", "event_id"):
            if bet_id in self._cache[key]:
                logger.debug(f"CACHE_GET: {key}={bet_id}")
                return self._cache[key][bet_id]
        logger.debug(f"CACHE_GET: Not Found {bet_id=}")
        return None

    def remove_bet_cache(self, bet: Bet) -> None:
        for key in ("id", "topic", "event_id"):
            lookup_key = getattr(bet, key)
            if lookup_key in self._cache[key]:
                del self._cache[key][lookup_key]
                logger.debug(f"CACHE_REMOVE: {key}={lookup_key}")


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
        # HD - iteral representation of the total type or
        # a duble number of the total value
        # HA - Number of the total value
        _HA = t.cast(str, payload["HA"])

        if "," in _HA:
            value = _HA
        else:
            try:
                value = float(_HA)  # type: ignore
            except ValueError:
                logger.error(f"Invalid total {_HA=} {payload['HD']=}")
                return None
            value = _HA

        bet_id = payload["ID"]
        event_id = t.cast(str, payload["FI"])
        odds = t.cast(str, payload["OD"])

        if None in (bet_id, event_id, odds):
            logger.error(f"Invalid bet {dict(payload)}")
            return None

        event = await self._db.get_event(event_id=event_id)

        if not event.sport.is_team_sport:
            logger.debug(f"Bet {bet_id} is spread")

            spread_type = "Home" if _HA.startswith("-") else "Away"

            return Bet(  # type: ignore[call-arg]
                id=bet_id,  # type: ignore[arg-type]
                event_id=event_id,
                odds=odds,
                bet_type=BetType.Spread,
                spread_type=spread_type,
                value=value,
                topic=payload["IT"],  # type: ignore[arg-type]
            )

        total_type = {
            "0": "Over",
            "1": "Under",
        }.get(
            payload["OR"], "Unknown"  # type: ignore[arg-type]
        )

        return Bet(  # type: ignore[call-arg]
            id=bet_id,  # type: ignore[arg-type]
            event_id=event_id,
            # odds=number_to_string(fractional_odds_to_decimal(odds)),
            odds=odds,
            bet_type=BetType.Totals,
            total=total_type,
            value=value,
            topic=payload["IT"],  # type: ignore[arg-type]
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
            topic=payload["IT"],  # type: ignore[arg-type]
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
            topic=payload["IT"],  # type: ignore[arg-type]
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
            else:
                logger.error(f"Invalid bet {dict(payload)}")
                return None

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
    _cache: BetCache = attrs.field(factory=BetCache, init=False)

    async def get_sport(self, payload: WebSocketPayload) -> Sport | None:
        assert payload["HC"] in ("10", "0"), payload  # nosec

        sport_id = payload["ID"]
        sport_topic = payload["IT"].split("_")  # type: ignore

        assert sport_topic[0] == "OV"  # nosec
        assert sport_topic[1] == sport_id  # nosec
        # Should be often equal to "_".join(sport_topic[2:]) == "1_3"

        sport_name = payload["NA"]

        assert payload["OF"] == "111", payload  # nosec

        return Sport(id=sport_id, name=sport_name)

    async def get_esport(self, payload: WebSocketPayload) -> Sport | None:
        sport_sub_id = payload["ID"]

        # "OVDI-2-C151A_1_3"
        sport_subtopic = payload["IT"].split("-")  # type: ignore

        assert sport_subtopic[0] == "OVDI"  # nosec
        assert sport_subtopic[1] == sport_sub_id  # nosec

        sport_topic = sport_subtopic[2].split("_")

        sport_id = sport_topic[0][:-1] + "_" + "_".join(sport_topic[1:])

        sport_name = payload["NA"]

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

    async def _get_esport_from_event(self, payload: WebSocketPayload) -> Sport:
        sport = await self._storage.get_sport(payload["T2"])  # type: ignore[arg-type]
        return sport or NoSport

    async def get_event(self, payload: WebSocketPayload) -> Event | None:
        league_name = payload["CT"]
        event_name = payload["NA"]
        event_id = payload["OI"]

        try:
            team_1, team_2 = get_team_from_event_name(event_name)  # type: ignore[arg-type]
        except InvalidTeamName as exc:
            logger.error(exc)
            return None

        if payload["TU"] is not None:
            event_dt = dt.datetime.strptime(payload["TU"], "%Y%m%d%H%M%S")
        else:
            logger.debug("No event date")
            event_dt = None

        sport: Sport | None
        if payload["ID"].endswith("C151A_1_3"):  # type: ignore[union-attr]
            sport = await self._get_esport_from_event(payload)
        else:
            sport = await self._get_sport_from_event_id(payload["ID"])  # type: ignore

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

        topic_id = payload["topic_id"].strip()  # type: ignore[union-attr]

        bet: Bet | None
        if bet_by_topic := self._cache.get_bet_cache(topic_id):
            bet = bet_by_topic
        else:
            bet_id = str(get_bet_id_from_topic_id(topic_id))
            bet = self._cache.get_bet_cache(bet_id)
            if bet is None:
                raise InvalidUpdate()

        logger.debug(f"Bet {topic_id}")
        bet.odds = payload["OD"]  # type: ignore[assignment]
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

    async def parse(self, /, payload: WebSocketPayload) -> Update | None:
        logger.debug(f"Parse {dict(payload)=}")

        if payload["update_type"] is not None:
            try:
                bet = await self.parse_update(payload=payload)
                if bet is not None:
                    self._cache.add_bet_cache(bet)
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
        elif payload["EX"] is not None:
            logger.debug("API details sent")
        elif payload["HC"] is not None:
            sport = await self.get_sport(payload)
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
                self._cache.add_bet_cache(bet)
                return Update(key=UpdateType.BET, data=bet)
            else:
                logger.error(f"Invalid bet {dict(payload)}")
        await self.parse_unknown_payload(payload)
        return None
