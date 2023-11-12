import json
from os import PathLike

import aiofiles

from app.dto.entities.event import Event
from app.dto.entities.sport import AnySport
from app.repository.db.in_memory import InMemoryDB


class JsonDB(InMemoryDB):
    _json_db_path: PathLike

    def __init__(self, json_db_path: PathLike) -> None:
        super().__init__()
        self._json_db_path = json_db_path

    async def save(self) -> None:
        sports: list[AnySport] = list((await self.get_sports()).values())
        events: dict[str, Event] = await self.get_events()
        serializable = {
            "_sports": [sport.model_dump_json() for sport in sports],
            **{event.event_id: event.model_dump_json() for event in events.values() if event.id},
        }
        async with aiofiles.open(self._json_db_path, mode="w") as f:
            await f.write(json.dumps(serializable, indent=4, sort_keys=True))
