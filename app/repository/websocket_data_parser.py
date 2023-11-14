import typing as t
from collections import defaultdict

import attrs
from loguru import logger

from app.dto import constants
from app.dto.annotations import WebSocketPayload
from app.dto.enums import WebSocketMessageType
from app.dto.regex import Regex

logger.bind(context="websocket_data_parser")


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class WebSocketDataParserRepository:
    async def stream_payloads(self, /, message: str) -> t.AsyncGenerator[WebSocketPayload, None]:
        _msg_type, *records = message.split("|")

        for nodes in records:
            payload: WebSocketPayload = defaultdict(lambda: None)
            node_type = None
            for node in nodes.split(";"):
                key, *val = node.split("=")
                if not val or not val[0]:
                    continue
                node_type = node_type or key
                payload[key] = val[0]

            yield payload

    async def stream_updates(self, /, data: bytes) -> t.AsyncGenerator[WebSocketPayload, None]:
        for update in Regex.WS.UPDATE_DATA_DELIM.findall(data):
            topic_id, update_type, data = Regex.WS.MESSAGE_DELIM.findall(update)[0]
            parsed = Regex.WS.RECORD_DELIM.findall(data)

            parsed_data: dict[bytes, bytes] = {
                b"topic_id": topic_id,
                b"update_type": update_type,
                **{pair[0]: pair[1] for pair in parsed},
            }
            payload = {k.decode("utf-8"): v.decode("utf-8") for k, v in parsed_data.items()}
            yield defaultdict(lambda: None, payload)

    async def parse(self, /, data: bytes) -> t.AsyncGenerator[WebSocketPayload, None]:
        SUBSCRIBE_ACTION = 4

        if data.startswith(constants.UPDATE_DATA_DELIM):
            async for payload in self.stream_updates(data=data):
                yield payload
            return

        for msg in data.split(constants.MESSAGE_DELIM):
            msg_type: int = msg[0]
            match msg_type:
                case WebSocketMessageType.INITIAL_TOPIC_LOAD | WebSocketMessageType.DELTA:
                    records = msg.split(constants.RECORD_DELIM)
                    message = msg[len(records[0]) + 1 :]

                    logger.debug("Process ws data")
                    async for payload in self.stream_payloads(message=message.decode("utf-8")):
                        yield payload

                case WebSocketMessageType.CLIENT_ABORT | WebSocketMessageType.CLIENT_CLOSE:
                    logger.debug(
                        "Connection close/abort message type sent "
                        f"from publisher. Message type: {msg_type}"
                    )
                case WebSocketMessageType.CLIENT_ACTION:
                    if msg[:3] == SUBSCRIBE_ACTION:
                        logger.debug("Subscribe")
                case _:
                    logger.debug(f"Unrecognised message type sent from publisher: {msg_type}")
