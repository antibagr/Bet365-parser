import asyncio
import typing as t

import attrs
from loguru import logger

from app.lib.provider import WindowsChromeDataProvider


@t.final
@attrs.define(slots=True, frozen=False, kw_only=True)
class WebSocketDataProviderRepository:
    _provider: WindowsChromeDataProvider
    _restart_provider_timeout: int

    _restart_task: asyncio.Task = attrs.field(init=False, repr=False, default=None)
    _restart_is_scheduled: bool = attrs.field(init=False, repr=False, default=False)

    async def _restart(self) -> None:
        """
        Wait for reopen provider.
        """
        try:
            await asyncio.sleep(self._restart_provider_timeout)
            logger.warning("Restart provider due to timeout")
            self._restart_is_scheduled = False
            await self.restart_now()
        except asyncio.CancelledError:
            ...
        finally:
            self._restart_is_scheduled = False

    async def restart_now(self) -> None:
        await self._provider.open()
        await self.schedule_restart()

    async def schedule_restart(self) -> None:
        """
        Schedule provider restart.
        """
        if self._restart_is_scheduled:
            return
        if self._restart_task:
            self._restart_task.cancel()
        self._restart_task = asyncio.create_task(self._restart())
        self._restart_is_scheduled = True

    async def ping(self) -> None:
        """
        Notify provider that data stream is active.
        """
        logger.debug("Ping")
        if self._restart_is_scheduled:
            self._restart_task.cancel()
            self._restart_is_scheduled = False

        await self.schedule_restart()
