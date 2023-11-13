import typing as t

import attrs
from loguru import logger

from app.dto.annotations import WebSocketPayload
from app.dto.entities.sport import Sport
from app.dto.entities.update import Update
from app.repository.db.db import DB

logger.bind(context="data_parser_v2")

TEMP = {"Sport": {}}  # type: ignore


class PayloadID:
    P_ENDP = "P-ENDP"
    ENDP = "ENDP"


class SportManager:
    def __init__(self, db: DB) -> None:
        self._db = db


class BetParser:
    def __init__(self, db: DB) -> None:
        self._db = db


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class DataParserRepository:
    _bet_parser: BetParser
    _sport_manager: SportManager
    _storage: DB

    async def get_sport(self, payload: WebSocketPayload) -> Sport | None:
        assert payload["HC"] == "10"  # nosec

        sport_id = payload["ID"]
        sport_topic = payload["IT"].split("_")  # type: ignore

        assert sport_topic[0] == "OV"  # nosec
        assert sport_topic[1] == sport_id  # nosec
        assert "_".join(sport_topic[2:]) == "1_3"

        sport_name = payload["NA"]

        assert payload["OF"] == "111"  # nosec

        sport_position = payload["OR"]

        if sport_id in TEMP:
            logger.warning(f"Sport {sport_id} already exists")

        TEMP["Sport"][sport_id] = {
            "name": sport_name,
            "topic": payload["IT"],
            "position": sport_position,
        }

        logger.error(TEMP)

        return None

    async def parse(self, /, payload: WebSocketPayload) -> Update | None:
        logger.debug(f"Parse {dict(payload)=}")

        match payload["ID"]:
            case PayloadID.ENDP:
                logger.debug("ENDP sent")
            case PayloadID.P_ENDP:
                logger.success("Pull subscription connected!")

        if payload["EX"] is not None and payload["NA"].startswith("/"):  # type: ignore
            logger.debug("API details sent")
            assert payload["IT"] == payload["IT"].lower()  # type: ignore  # nosec
        elif payload["HC"] is not None:
            logger.info("Sport sent")
            return await self.get_sport(payload)  # type: ignore

        return None
