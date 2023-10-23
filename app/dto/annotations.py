import typing as t

from app.dto.entities.feed import FeedBet

APIData: t.TypeAlias = dict[str, t.Any]
BetsGenerator: t.TypeAlias = t.Generator[FeedBet, None, None]
