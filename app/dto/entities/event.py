from app.dto.entities.base import BaseModel
from pydantic import Field
from collections import defaultdict
import datetime as dt

from app.dto.entities.bets import Bet

class Event(BaseModel):
    id: str | None = None
    league: str | None = None
    name: str | None = None
    image: str | None = None
    team_1: str | None = None
    team_2: str | None = None
    sport: str | None = None
    event_dt: dt.datetime | None = None
    bets: dict[str, list[Bet]] = Field(default_factory=defaultdict(list))

    @property
    def is_empty(self) -> bool:
        return None in self
    

class Events(BaseModel):
    events: dict[str, Event] = Field(default_factory=defaultdict(Event))