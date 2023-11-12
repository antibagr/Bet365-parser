from sqlalchemy import Boolean, Column, DateTime, Integer, String

from src.repository.db.models.base import Base
from src.utils import timetools


class GlobalEvent(Base):
    __tablename__ = "global_events"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    team_1 = Column(String, nullable=False)
    team_2 = Column(String, nullable=False)
    sport = Column(String, nullable=False)
    dt = Column(DateTime(timezone=False), nullable=False, default=timetools.utcnow)

    is_new = Column(Boolean, nullable=False, default=True)

    created_at = Column(DateTime(timezone=True), default=timetools.utcnow, nullable=False)
    updated_at = Column(
        DateTime(timezone=True),
        default=timetools.utcnow,
        onupdate=timetools.utcnow,
        nullable=False,
    )
