import typing as t

# Serializable: t.TypeAlias = t.Union[str, int, float, bool, None]
Serializable: t.TypeAlias = t.Union[str, None]
WebSocketPayload: t.TypeAlias = dict[str, Serializable]
