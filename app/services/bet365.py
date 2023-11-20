import asyncio
import typing as t

import attrs
from loguru import logger

from app.dto.annotations import WebSocketPayload
from app.dto.entities.update import Update
from app.lib.wireshark import WireSharkInterCeptor

logger.bind(context="bet365")


class WebSocketDataParserInterface(t.Protocol):
    def parse(self, /, data: bytes) -> t.AsyncGenerator[WebSocketPayload, None]:
        ...


class DataParserInterface(t.Protocol):
    async def parse(self, /, payload: WebSocketPayload) -> Update | None:
        ...


class UpdatesRepositoryInterface(t.Protocol):
    async def add(self, /, update: Update) -> None:
        ...


class WebSocketDataProviderRepositoryInterface(t.Protocol):
    async def ping(self) -> None:
        ...

    async def restart_now(self) -> None:
        ...

    async def is_alive(self) -> bool:
        ...


@t.final
@attrs.define(slots=True, frozen=False, kw_only=True)
class Bet365LiveEventsService:
    _data_parser_repo: DataParserInterface
    _interceptor: WireSharkInterCeptor
    _updates_repo: UpdatesRepositoryInterface
    _websocket_data_parser_repo: WebSocketDataParserInterface
    _provider_repo: WebSocketDataProviderRepositoryInterface

    async def put(self, /, data: bytes) -> None:
        await self._provider_repo.ping()
        async for payload in self._websocket_data_parser_repo.parse(data=data):
            try:
                if payload:
                    update = await self._data_parser_repo.parse(payload=payload)
                else:
                    logger.debug("Empty payload")
            except Exception as exc:
                logger.exception(f"Parse error: {exc}")
                continue
            if update is None:
                continue
            await self._updates_repo.add(update=update)

    async def process(self) -> None:
        logger.info("Start provider")
        asyncio.create_task(self._provider_repo.restart_now())
        await self._interceptor.intercept(self.put)

    async def is_alive(self) -> bool:
        return await self._provider_repo.is_alive()
