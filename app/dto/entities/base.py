from __future__ import annotations

import typing as t
from dataclasses import asdict, dataclass, fields

T = t.TypeVar("T")


@dataclass
class BaseEntity:
    @property
    def dict(self) -> dict[str, t.Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls: t.Type[T], **kwargs: t.Any) -> T:
        """
        The equal of pydantic.BaseModel with Extra.ignore param.
        Parses passed dict ignoring extra fields.

        Source: https://stackoverflow.com/a/57208298
        """
        _fields = {f.name for f in fields(cls)}
        return cls(**{k: kwargs[k] for k in kwargs if k in _fields})
