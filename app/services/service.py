import typing as t
from contextlib import asynccontextmanager

from app.repository.bet365 import Bet365FetcherRepo, Bet365ParserRepo, DummyBet365FetcherRepo
from app.repository.bet_cache import InMemoryCache
from app.repository.events import EventsRepo
from app.services.bet365 import Bet365LiveEventsService
from app.services.liveness_probe import LivenessProbeInterface, LivenessProbeSrv
from app.settings import settings

# Dependencies layer
cache = InMemoryCache()

# Repository Layer
_fetcher_kw = {"response_file_path_pattern": settings.RESPONSE_FILE_PATH_PATTERN}

if settings.is_production:
    bet_365_fetcher = Bet365FetcherRepo(**_fetcher_kw)
else:
    bet_365_fetcher = DummyBet365FetcherRepo(**_fetcher_kw)  # type: ignore[assignment]

bet_365_parser = Bet365ParserRepo(cache=cache)

events_repo = EventsRepo()


# Service Layer
bet_365_live_events_service = Bet365LiveEventsService(
    fetcher=bet_365_fetcher,
    parser=bet_365_parser,
    events_repo=events_repo,
    update_interval_sleep_range=settings.UPDATE_INTERVAL_SLEEP_RANGE,
)

liveness_probe_resources: list[LivenessProbeInterface] = [
    bet_365_live_events_service,
]
liveness_probe_service = LivenessProbeSrv(resources=liveness_probe_resources)


async def startup() -> None:
    await cache.start()


async def shutdown() -> None:
    await cache.stop()


@asynccontextmanager
async def application_dependencies() -> t.AsyncGenerator[None, None]:
    await startup()
    try:
        yield
    finally:
        await shutdown()
