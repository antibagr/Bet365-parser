import typing as t

import attrs

from app.dto.entities.feed import FeedEvent


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class EventsRepo:
    async def put(self, update: FeedEvent) -> None:
        print(update.dict)
