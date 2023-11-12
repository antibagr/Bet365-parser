import typing as t

import attrs

from app.dto.entities.update import Update
from app.repository.db.db import DB


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class UpdatesRepository:
    _storage: DB

    async def add(self, update: Update) -> None:
        await self._storage.add(update)
        await self._storage.save()
