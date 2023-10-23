import asyncio
import datetime as dt
import typing as t

import attrs

from app.settings import settings


class BetsCache(t.Protocol):
    async def get(self, key: str) -> list[int]:
        ...

    async def put(self, key: str, value: list[int]) -> None:
        ...

    async def start(self) -> None:
        ...

    async def stop(self) -> None:
        ...


@t.final
@attrs.define(slots=True, init=False)
class InMemoryCache(BetsCache):
    _cleanup_task: asyncio.Task | None = attrs.field()
    _cache: dict[str, list[int]] = attrs.field(factory=dict)
    _ttl_cache: dict[str, int] = attrs.field(factory=dict)

    def __init__(self) -> None:
        self._cache = {}
        self._ttl_cache = {}

    async def start(self) -> None:
        self._cleanup_task = asyncio.create_task(self._cleanup())

    async def stop(self) -> None:
        if self._cleanup_task:
            self._cleanup_task.cancel()
            await self._cleanup_task

    async def get(self, key: str) -> list[int]:
        return self._cache.get(key, [])

    async def put(self, key: str, value: list[int]) -> None:
        self._cache[key] = value
        self._ttl_cache[key] = int(dt.datetime.now().timestamp()) + settings.BETS_CACHE_TTL_SECONDS

    async def _cleanup(self) -> None:
        try:
            for key, ttl in self._ttl_cache.items():
                if dt.datetime.now().timestamp() > ttl:
                    self._cache.pop(key, None)
                    self._ttl_cache.pop(key, None)
            await asyncio.sleep(10)
        except asyncio.CancelledError:
            ...
