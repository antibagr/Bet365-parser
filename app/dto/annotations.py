import typing as t

Serializable: t.TypeAlias = t.Union[str, int, float, bool, None, list[t.Any], dict[str, t.Any]]