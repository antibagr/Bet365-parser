import datetime as dt
import typing as t

import attrs
from loguru import logger

from app.dto.annotations import WebSocketPayload
from app.dto.entities.bets import Bet
from app.dto.entities.event import Event
from app.dto.entities.sport import AnySport, ESport, NoSport, Sport
from app.dto.entities.update import Update
from app.dto.enums import BetType, UpdateType
from app.repository.db.db import DB
from app.utils import get_esport_id

logger.bind(context="data_parser_v1")


class SportManager:
    def __init__(self, db: DB) -> None:
        self._db = db

    async def get_esport(self, sport_id: str | None) -> Sport:
        if sport_id is None:
            return None

        esport_id = get_esport_id(sport_id)
        if not await self._db.sport_exists(esport_id):
            if not await self._db.sport_exists(sport_id):
                await self._db.add_sport(sport=Sport(id=sport_id))
            sport = await self._db.get_sport(sport_id)
            if sport is None:
                raise RuntimeError(f"Sport {sport_id} not found")
            await self._db.add_sport(ESport(sport=sport))
        return await self._db.get_esport(esport_id)

    async def get_sport(self, sport_id) -> Sport:
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

        _hd = t.cast(str, payload["HD"])
        _ha = t.cast(str, payload["HA"])

        if "," in _hd:
            value = _hd
        else:
            if float(_ha) != float(_hd.strip()):
                logger.warning(f"Total {_ha=} != {_hd=}")
                raise ValueError(f"Total {_ha=} != {_hd=}")
            value = _ha

        bet_id = t.cast(str, payload["ID"])
        event_id = t.cast(str, payload["FI"])
        odds = t.cast(str, payload["OD"])

        if None in (bet_id, event_id, odds):
            logger.warning(f"Invalid bet {payload}")
            return None

        return Bet(  # type: ignore[call-arg]
            id=bet_id,
            event_id=event_id,
            # odds=number_to_string(fractional_odds_to_decimal(odds)),
            odds=odds,
            bet_type=BetType.Totals,
            total=total_type,
            value=value,
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
            event_id=event_id,
            # odds=number_to_string(fractional_odds_to_decimal(odds)),
            odds=odds,
            bet_type=BetType.Results,
            team=team,
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

    async def _get_sport(self, /, sport_id: str | None, team_1: str, team_2: str) -> AnySport:
        if sport_id is None:
            return NoSport
        if team_1.endswith("Esports") or team_2.endswith("Esports"):
            return await self._sport_manager.get_esport(sport_id)
        return await self._sport_manager.get_sport(sport_id)

    async def get_event(self, /, payload: WebSocketPayload) -> Event | None:
        league = payload["CT"]
        # event_name = payload["AC"]
        teams = t.cast(str, payload["NA"])
        team_1, team_2 = "", ""
        for sep in (" v ", " vs ", " @ "):
            try:
                team_1, team_2 = teams.split(sep)
                break
            except (ValueError, AttributeError):
                ...

        if not team_1 or not team_2:
            logger.warning(f"Can't split {teams=} by any separator")
            return None

        sport = await self._get_sport(sport_id=payload["OR"], team_1=team_1, team_2=team_2)

        if payload["TU"] is not None:
            event_dt = dt.datetime.strptime(payload["TU"], "%Y%m%d%H%M%S")
        else:
            logger.debug(f"No event date {payload=}")
            event_dt = None
        event_id = payload["OI"]
        return Event(
            id=event_id,
            league=league,
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

        if sport_id is None:
            raise ValueError("No sport ID")

        sports = await self._storage.get_sports()

        if sport_id in sports and sports[sport_id].name is not None:
            logger.debug(f"Sport {payload['OR']} already exists")
            return None

        logger.debug(f"New sport: {payload['NA']=}")
        logger.debug(str(sports))

        if payload["NA"] == "Tennis":
            logger.debug("Update tennis bets")
            events = await self._storage.get_events()
            for event in events.values():
                if event.sport.id == sport_id:
                    for bet in event.bets.values():
                        updated_bet = await self._bet_parser.get_bet(payload=bet.raw)
                        if updated_bet is not None:
                            logger.debug(f"Update bet {updated_bet.id=}")
                            await self._storage.add(Update(key=UpdateType.BET, data=updated_bet))

        return Sport(id=sport_id, name=payload["NA"])

    async def parse(self, /, payload: WebSocketPayload) -> Update | None:
        logger.debug(f"Parse {dict(payload)=}")

        if payload["OD"] is not None:
            logger.debug("Parse odds")
            bet = await self._bet_parser.get_bet(payload=payload)
            if bet:
                return Update(key=UpdateType.BET, data=bet)
        elif payload["HM"] is not None and payload["MR"] is not None:
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
        else:
            logger.info("Failed to parse")
        return None
