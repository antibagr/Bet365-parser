from __future__ import annotations

import enum
import typing as t

# TODO: Resolve circular imports
APIData: t.TypeAlias = dict[str, t.Any]


class BetType:
    RESULTS_TEAM_1 = "1"
    RESULTS_TEAM_2 = "2"
    RESULTS_DRAW = "X"

    RESULTS_1X = "1X"
    RESULTS_X2 = "X2"
    RESULTS_12 = "12"

    TOTALS_OVER = "O"
    TOTALS_UNDER = "U"

    HAS_SCORE_TEAM_1_YES: str = "1_1"
    HAS_SCORE_TEAM_1_NO: str = "1_0"
    HAS_SCORE_TEAM_2_YES: str = "2_1"
    HAS_SCORE_TEAM_2_NO: str = "2_0"
    HAS_SCORE_BOTH_YES: str = "0_1"
    HAS_SCORE_BOTH_NO: str = "0_0"


@enum.unique
class BookmakerEnum(enum.StrEnum):
    Bet365 = "bet365"


@enum.unique
class SportEnum(enum.StrEnum):
    FOOTBALL = "Футбол"
    BASKETBALL = "Баскетбол"
    HOCKEY = "Хоккей"
    TENNIS = "Теннис"
    VOLLEYBALL = "Волейбол"

    @classmethod
    def from_english(cls, sport: str) -> SportEnum:
        return {
            "Football": cls.FOOTBALL,
            "Soccer": cls.FOOTBALL,
            "Basketball": cls.BASKETBALL,
            "Hockey": cls.HOCKEY,
            "Tennis": cls.TENNIS,
            "Volleyball": cls.VOLLEYBALL,
        }[sport]


@enum.unique
class MarketNameEnum(enum.StrEnum):
    TOTALS = "Totals"
    RESULTS = "Results"
    HAS_SCORE = "HasScore"
    HANDICAP = "Handicap"
