import typing as t

import attrs

from app.dto.annotations import APIData
from app.repository.abc.fetcher import ABCFetcher


class Bet365Fetcher(ABCFetcher):
    ...


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class DummyBet365FetcherRepo(Bet365Fetcher):
    async def fetch_events(self) -> APIData:
        ...


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class Bet365FetcherRepo(Bet365Fetcher):
    async def fetch_events(self) -> APIData:
        ...
