import typing as t

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
                    (await self.get_events())[bet.event_id].bets[bet.bet_type].append(bet)
            case UpdateType.SPORT:
                sport: AnySport = t.cast(AnySport, update.data)
                if not sport.is_empty:
                    (await self.get_sports())[sport.sport_id] = sport
            case _:
                raise KeyError(f"Unknown update key: {update.key}")

    async def add_sport(self, sport: AnySport) -> None:
        if not sport.id:
            return
        (await self.get_sports())[sport.sport_id] = sport

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
