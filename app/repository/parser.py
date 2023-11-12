import datetime as dt
import typing as t

import attrs
from loguru import logger

from app.dto.annotations import WebSocketPayload
from app.dto.entities.bets import Bet
from app.dto.entities.event import Event
from app.dto.entities.sport import AnySport, ESport, Sport
from app.dto.entities.update import Update
from app.dto.enums import BetType, UpdateType
from app.repository.db.db import DB
from app.utils import decimal_to_str, fractional_odds_to_decimal, get_esport_id

logger.bind(context="data_parser")


class SportManager:
    def __init__(self, db: DB) -> None:
        self._db = db

    async def get_esport(self, sport_id: str | None) -> AnySport | None:
        if not sport_id:
            return None

        esport_id = get_esport_id(sport_id)
        if not await self._db.sport_exists(esport_id):
            if not await self._db.sport_exists(sport_id):
                await self._db.add_sport(sport=Sport(id=sport_id))
            sport = await self._db.get_sport(sport_id)
            if sport is None:
                raise RuntimeError(f"Sport {sport_id} not found")
            await self._db.add_sport(sport=ESport(sport=sport))
        return await self._db.get_esport(esport_id)

    async def get_sport(self, sport_id: str | None) -> Sport | None:
        if not sport_id:
            return None

        if not await self._db.sport_exists(sport_id):
            await self._db.add_sport(Sport(id=sport_id))
        return await self._db.get_sport(sport_id)


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

        if not payload["HA"] == payload["HD"].strip():  # type: ignore[union-attr]
            logger.warning(f"Total {payload['HA']=} != {payload['HD']=}")
            raise ValueError(f"Total {payload['HA']=} != {payload['HD']=}")

        bet_id = t.cast(str, payload["ID"])
        event_id = t.cast(str, payload["FI"])
        odds = t.cast(str, payload["OD"])

        return Bet(  # type: ignore[call-arg]
            id=bet_id,
            event_id=event_id,
            odds=decimal_to_str(fractional_odds_to_decimal(odds)),
            bet_type=BetType.Totals,
            total=total_type,
            value=payload["HA"],
        )

    async def get_results(self, payload: WebSocketPayload) -> Bet | None:
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

        return Bet(  # type: ignore[call-arg]
            id=bet_id,
            event_id=event_id,
            odds=decimal_to_str(fractional_odds_to_decimal(odds)),
            bet_type=BetType.Results,
            team=team,
        )

    async def get_bet(self, payload: WebSocketPayload) -> Bet | None:
        if payload["HD"]:
            return await self.get_totals(payload=payload)
        else:
            return await self.get_results(payload=payload)


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class DataParserRepository:
    _bet_parser: BetParser
    _sport_manager: SportManager
    _storage: DB

    async def _get_sport(self, /, sport_id: str | None, team_1: str, team_2: str) -> AnySport:
        if team_1.endswith("Esports") or team_2.endswith("Esports"):
            sport = await self._sport_manager.get_esport(sport_id)
        else:
            sport = await self._sport_manager.get_sport(sport_id)
        if sport is None:
            raise RuntimeError(f"Sport {sport_id} not found")
        return sport

    async def get_event(self, /, payload: WebSocketPayload) -> Event | None:
        league = payload["CT"]
        event_name = payload["AC"]
        teams = t.cast(str, payload["NA"])
        for sep in (" v ", " vs ", " @ "):
            try:
                team_1, team_2 = teams.split(sep)
                break
            except (ValueError, AttributeError):
                logger.warning(f"Can't split {teams=} by {sep=}")
                return None

        sport = await self._get_sport(sport_id=payload["OR"], team_1=team_1, team_2=team_2)

        if payload["TU"]:
            event_dt = dt.datetime.strptime(payload["TU"], "%Y%m%d%H%M%S")
        else:
            logger.debug(f"No event date {payload=}")
            event_dt = None
        event_id = payload["OI"]
        return Event(
            id=event_id,
            league=league,
            name=event_name,
            team_1=team_1,
            team_2=team_2,
            sport=sport,
            event_dt=event_dt,
        )

    async def get_sport(self, /, payload: WebSocketPayload) -> Sport | None:
        if payload["OF"] != "111":
            logger.debug(f"Unknown sport {payload['NA']}")
            return None

        sport_id = payload["OR"]

        if not sport_id:
            raise ValueError("No sport ID")

        sports = await self._storage.get_sports()

        if sport_id in sports or sports[sport_id].name is not None:
            logger.debug(f"Sport {payload['OR']} already exists")
            return None

        logger.debug(f"New sport: {payload['NA']=}")
        logger.debug(str(sports))
        return Sport(id=sport_id, name=payload["NA"])

    async def parse(self, /, payload: WebSocketPayload) -> Update | None:
        if payload["HM"] and payload["MR"]:
            logger.debug("Parse sport")
            sport = await self.get_sport(payload=payload)
            if sport:
                return Update(key=UpdateType.SPORT, data=sport)
        elif (
            (payload["AC"] and payload["AC"].startswith("#"))
            or payload["T3"] == "3"
            or payload["SV"] is not None
        ):
            logger.debug("Parse event")
            event = await self.get_event(payload=payload)
            if event:
                logger.debug(f"Event: {event=}")
                return Update(key=UpdateType.EVENT, data=event)
        elif payload["OD"]:
            logger.debug("Parse odds")
            bet = await self._bet_parser.get_bet(payload=payload)
            if bet:
                return Update(key=UpdateType.BET, data=bet)

        return None
