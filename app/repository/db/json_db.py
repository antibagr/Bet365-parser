import json
from os import PathLike
from app.repository.db.base import BaseDB
from app.dto.entities.base import BaseModel
from app.dto.entities.update import Update

import aiofiles

from app.dto.entities.sport import ESport, Sports, Sport
from app.dto.entities.event import Events, Event
from app.dto.entities.bets import Bet

import typing as t


JsonStorage = t.TypedDict("JsonStorage", {
    "sports": Sports,
    "events": Events,
})


class JsonDB(BaseDB):
    _storage: JsonStorage
    _json_db_path: PathLike

    def __init__(self) -> None:
        self._storage: dict[str, BaseModel] = {
            "sports": Sports(),
            "events": Events(),
        }

    async def add(self, update: Update) -> None:
        match update.key:
            case "event":
                event: Event = update.data
                (await self.get_events())[event.id] = event
            case "bet":
                bet: Bet = update.data
                (await self.get_events())[bet.event_id].bets[bet.bet_type].append(bet)
            case "sport":
                sport: Sport | ESport = update.data
                (await self.get_sports())[sport.id] = sport
            case _:
                raise KeyError(f"Unknown update key: {update.key}")
            
    async def add_sport(self, sport: Sport | ESport) -> None:
        (await self.get_sports())[sport.id] = sport

    async def get_event(self, event_id: str) -> Event:
        return (await self.get_events())[event_id]
    
    async def get_sport(self, sport_id: str) -> Sport | ESport | None:
        return (await self.get_sports()).get(sport_id, None)
    
    async def get_events(self) -> dict[str, Event]:
        return self._storage["events"].events
    
    async def get_sports(self) -> dict[str, Sport | ESport]:
        return self._storage["sports"].sports

    async def save(self) -> None:
        serializable = {k: v.model_dump_json() for k, v in self._storage.items()}
        async with aiofiles.open(self._json_db_path, mode="w") as f:
            await f.write(json.dumps(serializable, indent=4, sort_keys=True))