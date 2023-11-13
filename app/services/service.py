import platform
import typing as t
from contextlib import asynccontextmanager

from app.lib.provider import LinuxDataProvider, WindowsChromeDataProvider
from app.lib.wireshark import WireSharkInterCeptor
from app.repository.db import DB
from app.repository.parser import BetParser, DataParserRepository, SportManager
from app.repository.provider import WebSocketDataProviderRepository
from app.repository.updates import UpdatesRepository
from app.repository.websocket_data_parser import WebSocketDataParserRepository
from app.services.bet365 import Bet365LiveEventsService
from app.services.liveness_probe import LivenessProbeInterface, LivenessProbeSrv
from app.settings import settings
from app.utils import setup_logging

# Dependency Layer

interceptor = WireSharkInterCeptor(
    source_ip=settings.SOURCE_IP,
    interceptor_parameters=settings.INTERCEPTOR_KW,
)

if platform.system() == "Windows":
    provider = WindowsChromeDataProvider(url=settings.BET365_URL)
else:
    provider = LinuxDataProvider(url=settings.BET365_URL)

# Repository Layer
db = DB(
    json_db_path=settings.JSON_DB_PATH,
)
websocket_data_parser_repo = WebSocketDataParserRepository()
data_parser_repo = DataParserRepository(
    bet_parser=BetParser(db=db),
    sport_manager=SportManager(db=db),
    storage=db,
)
updates_repo = UpdatesRepository(storage=db)
provider_repo = WebSocketDataProviderRepository(
    provider=provider,
    restart_provider_timeout=settings.PROVIDER_TIMEOUT,
)


# Service Layer
bet_365_live_events_service = Bet365LiveEventsService(
    data_parser_repo=data_parser_repo,
    interceptor=interceptor,
    updates_repo=updates_repo,
    websocket_data_parser_repo=websocket_data_parser_repo,
    provider_repo=provider_repo,
)
liveness_probe_resources: list[LivenessProbeInterface] = [
    bet_365_live_events_service,
]
liveness_probe_service = LivenessProbeSrv(resources=liveness_probe_resources)


async def startup() -> None:
    setup_logging()
    await db.connect()


async def shutdown() -> None:
    await db.save()
    await db.disconnect()


@asynccontextmanager
async def application_dependencies() -> t.AsyncGenerator[None, None]:
    await startup()
    try:
        yield
    finally:
        await shutdown()
