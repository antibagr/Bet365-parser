import enum
import typing as t


@t.final
@enum.unique
class WebSocketUpdateType(enum.StrEnum):
    SNAPSHOT = "F"
    UPDATE = "U"
    INSERT = "I"
    DELETE = "D"


@t.final
@enum.unique
class WebSocketMessageType(enum.IntEnum):
    INITIAL_TOPIC_LOAD = 20  # \x14
    DELTA = 21  # \x15
    CLIENT_ABORT = 28  # '\x1c'
    CLIENT_CLOSE = 29  # '\x1d'
    CLIENT_ACTION = 49  # '1'


@t.final
@enum.unique
class BetType(enum.StrEnum):
    Results = "Results"
    Totals = "Totals"
    Handicap = "Handicap"
    Unknown = "Unknown"