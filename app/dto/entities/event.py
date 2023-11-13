import datetime as dt
import typing as t
from collections import defaultdict

from pydantic import Field, field_serializer

from app.dto.entities.base import BaseModel
from app.dto.entities.bets import Bet
from app.dto.entities.sport import AnySport, Sport
from app.dto.exceptions import EmptyFieldException


@t.final
class Event(BaseModel):
    id: str | None = None
    league: str | None = None
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

    @field_serializer("event_dt")
    def serialize_dt(self, event_dt: dt.datetime, _info) -> str | None:
        if event_dt:
            return event_dt.strftime("%Y-%m-%d %H:%M:%S")
        return None

    @field_serializer("bets")
    def serialize_bets(
        self, bets: t.DefaultDict[str, list[Bet]], _info
    ) -> dict[str, dict[str, dict[str, str]]]:
        return {
            bet_type: {
                bet.id: bet.model_dump(exclude={"id", "event_id", "bet_type"})
                for bet in bets[bet_type]
            }
            for bet_type in bets
        }

    @field_serializer("sport")
    def serialize_sport(self, sport: AnySport, _info) -> str | None:
        return sport.name


@t.final
class Events(BaseModel):
    events: dict[str, Event] = Field(default_factory=lambda: defaultdict(Event))
