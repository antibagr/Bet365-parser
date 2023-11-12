import typing as t

from pydantic import ConfigDict

from app.dto.entities.base import BaseModel
from app.dto.enums import BetType


@t.final
class Bet(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    event_id: str
    odds: str
    bet_type: BetType
