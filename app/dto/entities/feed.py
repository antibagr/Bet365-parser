import typing as t
from dataclasses import dataclass
from datetime import datetime

from app.dto.entities.base import BaseEntity
from app.dto.enums import BookmakerEnum


@t.final
@dataclass
class FeedBet(BaseEntity):
    type: str
    k: float
    meta: dict[str, t.Any]

    def get_hash(self) -> int:
        return hash(f"{self.type}_{self.k}_{self.meta!s}")


@t.final
@dataclass
class FeedEvent(BaseEntity):
    bk: BookmakerEnum
    event_id: str
    name: str
    sport: str
    team_1: str
    team_2: str
    dt: datetime
    received_at: datetime
    bets: list[FeedBet]
