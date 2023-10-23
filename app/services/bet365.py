import asyncio
import typing as t

import attrs
from loguru import logger

from app.dto.annotations import APIData
from app.dto.entities.feed import FeedEvent
from app.repository.events import EventsRepo
from app.services._base_live_service import BaseLiveEventsService


class FetcherInterface(t.Protocol):
    async def fetch_events(self) -> APIData:
        ...


class ParserInterface(t.Protocol):
    def parse_events(self, /, data: APIData) -> t.AsyncGenerator[FeedEvent, None]:
        ...


@t.final
@attrs.define(slots=True, frozen=False, kw_only=True)
class Bet365LiveEventsService(BaseLiveEventsService):
    _fetcher: FetcherInterface
    _parser: ParserInterface
    _events_repo: EventsRepo

    async def _process(self) -> None:
        try:
            logger.debug("Fetching events...")
            data = await self._fetcher.fetch_events()
        except Exception as exc:
            logger.exception(str(exc))
            data = {"events": []}
        async for feed_event in self._parser.parse_events(data=data):
            if feed_event is not None:
                logger.info(f"Sending event {feed_event.name}")
                asyncio.create_task(self._events_repo.put(feed_event))
