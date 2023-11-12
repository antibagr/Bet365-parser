import datetime as dt
import typing as t
from collections import defaultdict

from pydantic import Field

from app.dto.entities.base import BaseModel
from app.dto.entities.bets import Bet
from app.dto.entities.sport import AnySport, Sport
from app.dto.exceptions import EmptyFieldException


@t.final
class Event(BaseModel):
    id: str | None = None
    league: str | None = None
    name: str | None = None
    team_1: str | None = None
    team_2: str | None = None
    sport: AnySport = Field(default_factory=Sport)
    event_dt: dt.datetime | None = None
    bets: t.DefaultDict[str, list[Bet]] = Field(default_factory=lambda: defaultdict(list))

    @property
    def event_id(self) -> str:
        if self.id:
            return self.id
        raise EmptyFieldException(field="event_id")


@t.final
class Events(BaseModel):
    events: t.DefaultDict[str, Event] = Field(default_factory=lambda: defaultdict(Event))
