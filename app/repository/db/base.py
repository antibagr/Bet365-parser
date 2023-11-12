import logging
import typing as t

logger = logging.getLogger(__name__)

_T = t.TypeVar("_T", bound=t.Any)


class BaseDB:
    def __init__(self) -> None:
        ...

    async def __aenter__(self: _T) -> _T:
        return self

    async def __aexit__(self, exc_type, value, traceback) -> None:  # type: ignore
        ...

    async def connect(self) -> None:
        logger.info("database_connected")

    async def disconnect(self) -> None:
        logger.info("database_disconnected")

    async def is_alive(self) -> bool:
        return True


class PostgreSQLDriver(t.Protocol):
    async def connect(self) -> None:
        ...

    async def disconnect(self) -> None:
        ...

    async def connection(self) -> t.AsyncGenerator[_T, None]:
        ...


class BasePostgreSQLDB(BaseDB):
    def __init__(self, driver: PostgreSQLDriver) -> None:
        self.db = driver

    async def __aenter__(self: _T) -> _T:
        await self.db.connect()
        return self

    async def __aexit__(self, exc_type, value, traceback) -> None:  # type: ignore
        await self.db.disconnect()

    async def connect(self) -> None:
        logger.info("database_connected")
        await self.db.connect()

    async def disconnect(self) -> None:
        logger.info("database_disconnected")
        await self.db.disconnect()

    async def is_alive(self) -> bool:
        try:
            async with self.db.connection() as c:
                await c.execute("SELECT 'AGGR_PING_IS_ALIVE';")
            return True
        except Exception:
            return False
