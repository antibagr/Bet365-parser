import typing as t

from app.dto.entities.sport import Sport

RECORD_DELIM: t.Final = b"\x01"  # 1
FIELD_DELIM: t.Final = b"/"  # b"\x02"
HANDSHAKE_MESSAGE_DELIM: t.Final = b"\x03"  # 3
MESSAGE_DELIM: t.Final = b"\b"
HANDSHAKE_MESSAGE_END_DELIM: t.Final = b"\x00"

UPDATE_DATA_DELIM: t.Final = b"\x15"


NoSport: t.Final = Sport(id="-1", name="No Sport")
