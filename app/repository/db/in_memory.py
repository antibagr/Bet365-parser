import typing as t

from loguru import logger

from app.dto.entities.bets import Bet
from app.dto.entities.event import Event, Events
from app.dto.entities.sport import AnySport, ESport, Sport, Sports
from app.dto.entities.update import Update
from app.dto.enums import UpdateType
from app.repository.db.base import BaseDB

InMemoryStorage = t.TypedDict(
    "InMemoryStorage",
    {
        "sports": Sports,
        "events": Events,
        "bet_cache": dict[str, dict[str, Bet]],
    },
)


class InMemoryDB(BaseDB):
    _storage: InMemoryStorage

    def __init__(self) -> None:
        self._storage = {
            "sports": Sports(),
            "events": Events(),
            "bet_cache": {
                "id": {},
                "topic": {},
                "event_id": {},
            },
        }

    async def add(self, update: Update) -> None:
        match update.key:
            case UpdateType.EVENT:
                event: Event = t.cast(Event, update.data)
                logger.info(f"New event: {event.id} {event.sport}")
                (await self.get_events())[event.id] = event
            case UpdateType.BET:
                bet: Bet = t.cast(Bet, update.data)
                await self.add_bet(bet)
            case UpdateType.SPORT:
                sport: AnySport = t.cast(AnySport, update.data)
                await self.add_sport(sport)
            case _:
                raise KeyError(f"Unknown update key: {update.key}")

    def add_bet_cache(self, bet: Bet) -> None:
        _cache = self._storage["bet_cache"]

        for key in ("id", "topic", "event_id"):
            lookup_key = getattr(bet, key)
            if lookup_key not in _cache[key]:
                _cache[key][lookup_key] = bet
                logger.debug(f"CACHE_ADD: {key}={lookup_key}")
            else:
                logger.debug(f"CACHE_UPDATE: {key}={lookup_key}")
                _cache[key][lookup_key].odds = bet.odds
                _cache[key][lookup_key].update()

    def get_bet_cache(self, bet_id: str) -> Bet | None:
        for key in ("id", "topic", "event_id"):
            if bet_id in self._storage["bet_cache"][key]:
                logger.debug(f"CACHE_GET: {key}={bet_id}")
                return self._storage["bet_cache"][key][bet_id]
        logger.debug(f"CACHE_GET: Not Found {bet_id=}")
        return None

    def remove_bet_cache(self, bet: Bet) -> None:
        _cache = self._storage["bet_cache"]
        for key in ("id", "topic", "event_id"):
            lookup_key = getattr(bet, key)
            if lookup_key in _cache[key]:
                del _cache[key][lookup_key]
                logger.debug(f"CACHE_REMOVE: {key}={lookup_key}")

    async def add_bet(self, bet: Bet) -> None:
        events = await self.get_events()

        if bet.event_id not in events:
            event = Event(id=bet.event_id)
            logger.info(f"New event: {event.id} {event.sport}")
            events[bet.event_id] = event

        if bet.id in events[bet.event_id].bets:
            logger.debug(f"BET_UPDATE: {bet.id=}")
            events[bet.event_id].bets[bet.id].odds = bet.odds
        else:
            logger.debug(f"BET_ADD: {bet.id=}")
            events[bet.event_id].bets[bet.id] = bet

        events[bet.event_id].bets[bet.id].update()

        self.add_bet_cache(bet)

    async def add_sport(self, sport: AnySport) -> None:
        if sport.id is None:
            return
        sports = await self.get_sports()
        if isinstance(sport, ESport):
            logger.info(f"New esport: {sport.id} {sport.name}")
            sports[sport.sport_id] = sport
        else:
            logger.info(f"New sport: {sport.id} {sport.name}")
            if sport.sport_id in sports:
                sports[sport.sport_id].name = sport.name  # type: ignore[misc]
            else:
                sports[sport.sport_id] = sport

    async def get_event(self, event_id: str) -> Event:
        return (await self.get_events())[event_id]

    async def get_sport(self, sport_id: str) -> Sport | None:
        sports = await self.get_sports()
        return t.cast(Sport, sports.get(sport_id, None))

    async def get_esport(self, sport_id: str) -> ESport | None:
        sports = await self.get_sports()
        return t.cast(ESport, sports.get(sport_id, None))

    async def get_events(self) -> dict[str, Event]:
        return self._storage["events"].events

    async def get_sports(self) -> dict[str, AnySport]:
        return self._storage["sports"].sports

    async def sport_exists(self, sport_id: str) -> bool:
        return sport_id in (await self.get_sports())

    async def event_exists(self, event_id: str) -> bool:
        return event_id in (await self.get_events())
