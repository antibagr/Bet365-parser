import typing as t

import attrs

from app.dto.entities.websocket import WebSocketPayload
from app.dto.entities.update import Update
from app.services._base_live_service import BaseLiveEventsService


class InterceptorInterface(t.Protocol):
    def intercept(self) -> t.AsyncGenerator[bytes, None]:
        ...


class WebSocketDataParserInterface(t.Protocol):
    async def parse(self, /, data: bytes) -> WebSocketPayload | None:
        ...


class DataParserInterface(t.Protocol):
    def parse(self, /, payload: WebSocketPayload) -> Update | None:
        ...


class UpdatesRepositoryInterface(t.Protocol):
    async def add(self, /, update: Update) -> None:
        ...


@t.final
@attrs.define(slots=True, frozen=False, kw_only=True)
class Bet365LiveEventsService(BaseLiveEventsService):
    _interceptor: InterceptorInterface
    _websocket_parser: WebSocketDataParserInterface
    _data_parser: DataParserInterface
    _updates_repo: UpdatesRepositoryInterface

    async def _process(self) -> None:
        async for data in self._interceptor.intercept():
            async for payload in self._websocket_parser.parse(data):
                update = await self._data_parser.parse(payload)
                if update is None:
                    continue
                await self._updates_repo.add(update)
