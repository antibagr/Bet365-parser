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
    },
)


class InMemoryDB(BaseDB):
    _storage: InMemoryStorage

    def __init__(self) -> None:
        self._storage = {
            "sports": Sports(),
            "events": Events(),
        }

    async def add(self, update: Update) -> None:
        match update.key:
            case UpdateType.EVENT:
                event: Event = t.cast(Event, update.data)
                if not event.is_empty:
                    (await self.get_events())[event.event_id] = event
            case UpdateType.BET:
                bet: Bet = t.cast(Bet, update.data)
                if not bet.is_empty:
                    await self.add_bet(bet)
            case UpdateType.SPORT:
                sport: AnySport = t.cast(AnySport, update.data)
                await self.add_sport(sport)
            case _:
                raise KeyError(f"Unknown update key: {update.key}")

    async def add_bet(self, bet: Bet) -> None:
        events = await self.get_events()

        if bet.event_id not in events:
            events[bet.event_id] = Event(id=bet.event_id)

        if bet.id in events[bet.event_id].bets:
            logger.debug(f"UPDATE: {bet.id=}")
            events[bet.event_id].bets[bet.id].odds = bet.odds
        else:
            logger.debug(f"ADD: {bet.id=}")
            events[bet.event_id].bets[bet.id] = bet

        events[bet.event_id].bets[bet.id].update()

    async def add_sport(self, sport: AnySport) -> None:
        if sport.id is None:
            return
        sports = await self.get_sports()
        if isinstance(sport, ESport):
            sports[sport.sport_id] = sport
        else:
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
