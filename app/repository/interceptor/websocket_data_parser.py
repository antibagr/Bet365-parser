import typing as t

import attrs

from loguru import logger

from app.dto.entities.websocket import WebSocketPayload
from app.dto import constants
from app.dto.enums import WebSocketMessageType


logger.bind(context="websocket_data_parser")

@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class WebSocketDataParserRepository():

    async def stream_payloads(self, message: str) -> t.AsyncGenerator[WebSocketPayload, None]:
        msg_type, *message = message.split("|")

        for nodes in message:
            payload = WebSocketPayload()
            node_type = None
            for node in nodes.split(";"):
                key, *val = node.split("=")
                if not val or not val[0]:
                    val = [None]
                if not val:
                    continue
                node_type = node_type or key
                payload[key] = val[0]
                payload["Type"] = msg_type

            logger.debug(payload)
            
            yield payload

    async def parse_update(self, / data: bytes) -> None:

        ##NOTE: WIP

        logger.debug("Process ws update")

        messages = data.split(b"\x08")

        for message in messages:
            # first byte is one of WebSocketMessageType
            if message[0] == WebSocketMessageType.INITIAL_TOPIC_LOAD:
                logger.debug(f"Initial topic load {message.decode("utf-8")}")
                continue

            assert message[0] == WebSocketMessageType.DELTA, data
            event_id, updates = message[1:].split(b"\x01")

            update_type, data, _end = updates.split(b"|")

            data = {rec[0:2]: rec[3:] for rec in data.split(b";") if rec}

            # assert update_type == b"U", data

            if update_type != b"U":
                logger.debug(f"NOT AN UPDATE: {data=}")

            logger.info(f"{event_id.decode("utf-8")} -> {updates.decode("utf-8")} -> {data}")

    async def parse(self, /, data: bytes) -> t.AsyncGenerator[WebSocketPayload, None]:
        SUBSCRIBE_ACTION = 4

        if data.startswith(constants.UPDATE_DATA_DELIM):
            await self.parse_update(data)
            return

        for msg in data.split(constants.MESSAGE_DELIM):
            msg_type: int = msg[0]
            match msg_type:
                case WebSocketMessageType.INITIAL_TOPIC_LOAD | WebSocketMessageType.DELTA:
                    records = msg.split(constants.RECORD_DELIM)
                    # user_headers = records[0].split(constants.FIELD_DELIM)
                    # header = user_headers.pop(0)
                    # topic = header[1:]
                    message = msg[len(records[0]) + 1 :]

                    async for payload in self.stream_payloads(message.decode("utf-8")):
                        yield payload
                
                case WebSocketMessageType.CLIENT_ABORT | WebSocketMessageType.CLIENT_CLOSE:
                    logger.debug(
                        "Connection close/abort message type sent from publisher. Message type: "
                        + msg_type
                    )
                case WebSocketMessageType.CLIENT_ACTION:
                    action = msg[:3]
                    if action == SUBSCRIBE_ACTION:
                        logger.debug("Subscribe")
                        # subscribe("A_" + this.xcftToken)
                case _:
                    logger.debug(f"Unrecognised message type sent from publisher: {msg_type}")