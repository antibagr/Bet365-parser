from app.dto.entities.base import BaseModel
from app.dto.entities.bets import Bet
from app.dto.entities.event import Event
from app.dto.entities.sport import Sport, ESport

import typing as t


@t.final
class Update(BaseModel):
    key: t.Literal["sport", "event", "bet"]
    data: Sport | ESport | Event | Bet