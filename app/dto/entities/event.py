import datetime as dt
import typing as t
from collections import defaultdict

from pydantic import Field, field_serializer

from app.dto.entities.base import BaseModel
from app.dto.entities.bets import Bet
from app.dto.entities.sport import AnySport, NoSport
from app.dto.exceptions import EmptyFieldException


@t.final
class Event(BaseModel):
    id: str | None = None
    league: str | None = None
    team_1: str | None = None
    team_2: str | None = None
    sport: AnySport = Field(default=NoSport)
    event_dt: dt.datetime | None = None
    bets: dict[str, Bet] = Field(default_factory=dict)

    @property
    def event_id(self) -> str:
        if self.id:
            return self.id
        raise EmptyFieldException(field="event_id")

    @field_serializer("event_dt")
    def serialize_dt(self, event_dt: dt.datetime, _info) -> str | None:
        if event_dt:
            return event_dt.strftime("%Y-%m-%d %H:%M:%S")
        return None

    @field_serializer("bets")
    def serialize_bets(self, bets: dict[str, Bet], _info) -> dict[str, dict[str, dict[str, str]]]:
        return {bet_id: bet.model_dump(exclude=("event_id", "id", "raw")) for bet_id, bet in bets.items()}

    @field_serializer("sport")
    def serialize_sport(self, sport: AnySport, _info) -> str | None:
        return sport.name


@t.final
class Events(BaseModel):
    events: dict[str, Event] = Field(default_factory=lambda: defaultdict(Event))
