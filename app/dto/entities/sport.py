import typing as t

from pydantic import Field, model_serializer

from app.dto.entities.base import BaseModel
from app.dto.exceptions import EmptyFieldException
from app.utils import get_esport_id


@t.final
class Sport(BaseModel):
    id: str | None = None
    name: str | None = None

    @property
    def sport_id(self) -> str:
        if self.id is not None:
            return self.id
        raise EmptyFieldException(field="sport_id")


@t.final
class ESport(BaseModel):
    sport: Sport

    @property
    def id(self) -> str | None:
        if self.sport.id:
            return get_esport_id(self.sport.id)
        return None

    @property
    def name(self) -> str:
        if self.sport.name:
            return f"ESport {self.sport.name}"
        return f"ESport id({self.id or 'unknown'})"

    @property
    def sport_id(self) -> str:
        if self.sport.id is not None:
            return get_esport_id(self.sport.id)
        raise EmptyFieldException(field="sport_id")

    @model_serializer
    def ser_model(self) -> dict[str, t.Any]:
        return {
            "id": self.sport_id,
            "name": self.name,
        }

    if t.TYPE_CHECKING:

        def model_dump(
            self,
            *,
            mode: t.Literal["json", "python"] | str = "python",  # noqa: U100
            include: t.Any = None,  # noqa: U100
            exclude: t.Any = None,  # noqa: U100
            by_alias: bool = False,  # noqa: U100
            exclude_unset: bool = False,  # noqa: U100
            exclude_defaults: bool = False,  # noqa: U100
            exclude_none: bool = False,  # noqa: U100
            round_trip: bool = False,  # noqa: U100
            warnings: bool = True,  # noqa: U100
        ) -> dict[str, t.Any]:
            ...


AnySport: t.TypeAlias = t.Union[Sport, ESport]


@t.final
class Sports(BaseModel):
    sports: dict[str, AnySport] = Field(default_factory=dict)
