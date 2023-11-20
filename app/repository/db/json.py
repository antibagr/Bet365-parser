import json
import uuid
from os import PathLike

import aiofiles
from loguru import logger

from app.dto.entities.event import Event
from app.dto.entities.sport import Sport
from app.repository.db.in_memory import InMemoryDB


class JsonDB(InMemoryDB):
    _json_db_path: PathLike

    def __init__(self, json_db_path: PathLike) -> None:
        super().__init__()
        self._json_db_path = json_db_path

    async def save(self) -> None:
        sports: list[Sport] = list((await self.get_sports()).values())
        events: list[Event] = list((await self.get_events()).values())
        serializable = {
            event.id or uuid.uuid4().hex: json.loads(event.model_dump_json(exclude_none=True))
            for event in events
        }
        serializable["#__sports"] = {
            sport.sport_id: sport.name for sport in sports if sport.id is not None
        }

        logger.info(f"Saving {len(sports)} sports and {len(events)} events to {self._json_db_path}")

        async with aiofiles.open(self._json_db_path, mode="w", encoding="utf-8") as f:
            await f.write(json.dumps(serializable, indent=4, sort_keys=True))
