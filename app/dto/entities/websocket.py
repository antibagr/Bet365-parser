from app.dto.entities.base import BaseModel
from collections import defaultdict
from app.dto.annotations import Serializable

from pydantic import field_validator


def decode_bytes(value: bytes) -> str:
    return value.decode("utf-8")


class WebSocketMessage(BaseModel):
    message: str
    msg_type: int
    topic: str
    user_headers: list[bytes]

    validate_topic = field_validator("topic", allow_reuse=True)(decode_bytes)
    validate_message = field_validator("message", allow_reuse=True)(decode_bytes)


WebSocketPayload: dict[str, Serializable] = defaultdict(None)
