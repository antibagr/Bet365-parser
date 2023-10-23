import typing as t

import attrs

from app.dto.annotations import APIData
from app.dto.entities.feed import FeedEvent
from app.repository.bet_cache import BetsCache


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class Bet365ParserRepo:
    _cache: BetsCache

    async def parse_events(self, /, data: APIData) -> t.AsyncGenerator[FeedEvent, None]:
        ...
