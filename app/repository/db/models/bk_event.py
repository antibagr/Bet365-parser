from sqlalchemy import Column, DateTime, ForeignKey, Integer, String

from src.repository.db.models.base import Base
from src.utils import timetools


class BKEvent(Base):
    __tablename__ = "bk_events"

    # __table_args__ = (Index("task__status__delayed_to__idx", "status", "delayed_to"),)

    id = Column(String, nullable=False, primary_key=True, unique=True)
    name = Column(String, nullable=False)
    team_1 = Column(String, nullable=False)
    team_2 = Column(String, nullable=False)
    sport = Column(String, nullable=False)
    dt = Column(DateTime(timezone=False), nullable=False, default=timetools.utcnow)
    bk = Column(String, nullable=False)
    global_event_id = Column(Integer, ForeignKey("global_events.id", ondelete="CASCADE"), nullable=True)

    created_at = Column(DateTime(timezone=True), default=timetools.utcnow, nullable=False)
    updated_at = Column(
        DateTime(timezone=True),
        default=timetools.utcnow,
        onupdate=timetools.utcnow,
        nullable=False,
    )
