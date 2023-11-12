import asyncio
import random

import attrs
from loguru import logger


@attrs.define(slots=True, frozen=False, kw_only=True)
class BaseLiveEventsService:
    _is_alive: bool = attrs.field(default=True, init=False)
    _is_started: bool = attrs.field(default=False, init=False)

    async def process(self) -> None:
        try:
            self._is_started = True
            while True:
                try:
                    await self._process()
                    self._is_alive = True
                except Exception as exc:
                    self._is_alive = False
                    logger.exception(str(exc))
        finally:
            self._is_started = False

    async def _process(self) -> None:
        raise NotImplementedError()

    async def is_alive(self) -> bool:
        if not self._is_started:
            return True
        return self._is_alive
