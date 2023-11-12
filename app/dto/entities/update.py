import typing as t

from app.dto.entities.base import BaseModel
from app.dto.entities.bets import Bet
from app.dto.entities.event import Event
from app.dto.entities.sport import AnySport
from app.dto.enums import UpdateType


@t.final
class Update(BaseModel):
    key: UpdateType
    data: AnySport | Event | Bet
