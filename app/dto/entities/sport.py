import typing as t

from pydantic import Field

from app.dto.entities.base import BaseModel
from app.dto.exceptions import EmptyFieldException


@t.final
class Sport(BaseModel):
    id: str | None = None
    name: str | None = None
    is_team_sport: bool = True

    @property
    def sport_id(self) -> str:
        if self.id is not None:
            return self.id
        raise EmptyFieldException(field="sport_id")


@t.final
class Sports(BaseModel):
    sports: dict[str, Sport] = Field(default_factory=dict)


NoSport: t.Final = Sport(id="-1", name="No Sport")
