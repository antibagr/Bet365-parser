import typing as t

import attrs
from loguru import logger

from app.dto.annotations import WebSocketPayload
from app.dto.entities.update import Update

logger.bind(context="bet365")


class InterceptorInterface(t.Protocol):
    def intercept(self) -> t.AsyncGenerator[bytes, None]:
        ...


class WebSocketDataParserInterface(t.Protocol):
    def parse(self, /, data: bytes) -> t.AsyncGenerator[WebSocketPayload, None]:
        ...


class DataParserInterface(t.Protocol):
    async def parse(self, /, payload: WebSocketPayload) -> Update | None:
        ...


class UpdatesRepositoryInterface(t.Protocol):
    async def add(self, /, update: Update) -> None:
        ...


@attrs.define(slots=True, frozen=False, kw_only=True)
class BaseLiveEventsService:
    _is_alive: bool = attrs.field(default=True, init=False)
    _is_started: bool = attrs.field(default=False, init=False)

    async def is_alive(self) -> bool:
        if not self._is_started:
            return True
        return self._is_alive

    async def process(self) -> None:
        try:
            self._is_started = True
            while True:
                try:
                    async for data in self._get_stream():
                        try:
                            await self._process_stream(data=data)
                            self._is_alive = True
                        except Exception as exc:
                            self._is_alive = False
                            logger.exception(f"Process stream error: {exc}")
                except Exception as exc:
                    self._is_alive = False
                    logger.exception(f"Stream error: {exc}")
        finally:
            self._is_started = False
            self._is_alive = False

    async def _process_stream(self, /, data: bytes) -> None:
        raise NotImplementedError()

    def _get_stream(self) -> t.AsyncGenerator[bytes, None]:
        raise NotImplementedError()


@t.final
@attrs.define(slots=True, frozen=False, kw_only=True)
class Bet365LiveEventsService(BaseLiveEventsService):
    _data_parser_repo: DataParserInterface
    _interceptor_repo: InterceptorInterface
    _updates_repo: UpdatesRepositoryInterface
    _websocket_data_parser_repo: WebSocketDataParserInterface

    def _get_stream(self) -> t.AsyncGenerator[bytes, None]:
        return self._interceptor_repo.intercept()

    async def _process_stream(self, /, data: bytes) -> None:
        async for payload in self._websocket_data_parser_repo.parse(data=data):
            update = await self._data_parser_repo.parse(payload=payload)
            if update is None:
                continue
            await self._updates_repo.add(update=update)
