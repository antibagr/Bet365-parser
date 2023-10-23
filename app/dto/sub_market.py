from __future__ import annotations

import enum
import json

from app.dto.enums import BookmakerEnum, MarketNameEnum
from app.dto.exceptions import UnsupportedMarketError


@enum.unique
class SubMarketEnum(enum.StrEnum):
    MAIN = "MAIN"
    MATCH = "MATCH"
    WIN = "WIN"
    FINAL_WIN = "FINAL_WIN"

    TIME_1 = "TIME_1"
    TIME_2 = "TIME_2"

    PERIOD_1 = "PERIOD_1"
    PERIOD_2 = "PERIOD_2"

    SET_1 = "SET_1"
    SET_2 = "SET_2"
    SET_3 = "SET_3"
    SET_4 = "SET_4"
    SET_5 = "SET_5"

    QUARTER_1 = "QUARTER_1"
    QUARTER_2 = "QUARTER_2"
    QUARTER_3 = "QUARTER_3"
    QUARTER_4 = "QUARTER_4"

    ADDITIONAL_TIME = "ADDITIONAL_TIME"
    PENALTY_SERIES = "PENALTY_SERIES"

    @classmethod
    def _add_unknown_sub_market(
        cls, market: MarketNameEnum, sub_market: str, bookmaker: BookmakerEnum
    ) -> None:
        try:
            with open("unknown_sub_markets.json", "r", encoding="utf-8") as f:
                data = json.load(f)
        except (FileNotFoundError, json.decoder.JSONDecodeError):
            data = {}
        if bookmaker.value not in data:
            data[bookmaker.value] = {}
        if market.value in data[bookmaker.value]:
            data[bookmaker.value][market.value].append(sub_market)
            data[bookmaker.value][market.value] = list(set(data[bookmaker.value][market.value]))
        else:
            data[bookmaker.value][market.value] = [sub_market]
        with open("unknown_sub_markets.json", "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=4, sort_keys=True)

    @classmethod
    def from_bet365(cls, market: MarketNameEnum, sub_market: str) -> SubMarketEnum:
        raise UnsupportedMarketError(market)
