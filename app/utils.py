import sys
from decimal import Decimal

from loguru import logger


def setup_logging() -> None:
    logger.remove(0)
    logger.add(
        "logs/log_{time}.log",
        level="DEBUG",
        compression="zip",
        rotation="1 week",
        backtrace=True,
        diagnose=True,
    )
    logger.add(
        sys.stderr, format="{message}", level="DEBUG", colorize=True, backtrace=True, diagnose=True
    )


def get_esport_id(sport_id: str) -> str:
    return f"x{sport_id}"


def fractional_odds_to_decimal(odds: str) -> Decimal:
    if "/" not in odds:
        raise ValueError(f"Invalid odds: {odds}")
    numerator, denominator = odds.split("/")
    if denominator == "0":
        return Decimal(0)
    return (Decimal(numerator) / Decimal(denominator)) + 1


def decimal_to_str(dec: Decimal) -> str:
    return "{0:.2f}".format(dec)
