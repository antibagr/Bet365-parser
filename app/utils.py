import sys

from loguru import logger


def setup_logging() -> None:
    logger.remove(0)
    logger.add(
        "logs/log_{time}.log",
        level="DEBUG",
        rotation="1 week",
        retention=3,
        backtrace=True,
        diagnose=True,
    )
    logger.add(
        sys.stderr, format="{message}", level="DEBUG", colorize=True, backtrace=True, diagnose=True
    )


def fractional_odds_to_decimal(odds: str) -> float:
    if "/" not in odds:
        raise ValueError(f"Invalid odds: {odds}")
    numerator, denominator = odds.split("/")
    if denominator == "0":
        return float(0)
    return int(numerator) / int(denominator) + 1


def number_to_string(dec: float) -> str:
    return "{0:.2f}".format(dec)
