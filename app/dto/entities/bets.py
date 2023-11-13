import datetime as dt
import typing as t

from pydantic import ConfigDict, Field

from app.dto.entities.base import BaseModel
from app.dto.enums import BetType


@t.final
class Bet(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    event_id: str
    odds: str
    bet_type: BetType
    updated_at: dt.datetime = Field(default_factory=dt.datetime.utcnow)

    def update(self) -> None:
        """
        Update bet `updated_at` field with current datetime
        """
        self.updated_at = dt.datetime.utcnow()
