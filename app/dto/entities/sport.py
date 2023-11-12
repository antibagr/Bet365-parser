import typing as t
from pydantic import BaseModel, model_serializer, Field

from app.utils import get_esport_id


class Sport(BaseModel):
    id: str | None = None
    name: str | None = None


class ESport(BaseModel):
    sport: Sport

    @property
    def id(self) -> str:
        return get_esport_id(self.sport.id)

    @property
    def name(self) -> str:
        if self.sport.name:
            return f"ESport {self.sport.name}"
        return f"ESport id({self.sport.id})"

    @model_serializer
    def ser_model(self) -> str:
        return self.name

    if t.TYPE_CHECKING:
        # Ensure type checkers see the correct return type
        def model_dump(
            self,
            *,
            mode: t.Literal["json", "python"] | str = "python",
            include: t.Any = None,
            exclude: t.Any = None,
            by_alias: bool = False,
            exclude_unset: bool = False,
            exclude_defaults: bool = False,
            exclude_none: bool = False,
            round_trip: bool = False,
            warnings: bool = True,
        ) -> str:
            ...


class Sports(BaseModel):
    sports: dict[str, Sport | ESport] = Field(default_factory=dict)