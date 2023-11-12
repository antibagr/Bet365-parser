from app.dto.entities.base import BaseModel

from app.dto.enums import BetType


class Bet(BaseModel, extra="allow"):
    id: str
    event_id: str
    odds: float
    bet_type: BetType