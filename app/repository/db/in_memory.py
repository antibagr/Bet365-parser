import typing as t

from loguru import logger

from app.dto.entities.bets import Bet
from app.dto.entities.event import Event, Events
from app.dto.entities.sport import Sport, Sports
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
                if event.id is not None:
                    logger.info(f"New event: {event.id} {event.sport}")
                    (await self.get_events())[event.id] = event
            case UpdateType.BET:
                bet: Bet = t.cast(Bet, update.data)
                await self.add_bet(bet)
            case UpdateType.SPORT:
                sport: Sport = t.cast(Sport, update.data)
                await self.add_sport(sport)
            case _:
                raise KeyError(f"Unknown update key: {update.key}")

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

    async def add_sport(self, sport: Sport) -> None:
        if sport.id is None:
            return
        sports = await self.get_sports()
        logger.info(f"New sport: {sport.id} {sport.name}")
        if sport.sport_id in sports:
            sports[sport.sport_id].name = sport.name
        else:
            sports[sport.sport_id] = sport

    async def get_event(self, event_id: str) -> Event:
        return (await self.get_events())[event_id]

    async def get_sport(self, sport_id: str) -> Sport | None:
        sports = await self.get_sports()
        return t.cast(Sport, sports.get(sport_id, None))

    async def get_events(self) -> dict[str, Event]:
        return self._storage["events"].events

    async def get_sports(self) -> dict[str, Sport]:
        return self._storage["sports"].sports

    async def sport_exists(self, sport_id: str) -> bool:
        return sport_id in (await self.get_sports())

    async def event_exists(self, event_id: str) -> bool:
        return event_id in (await self.get_events())
