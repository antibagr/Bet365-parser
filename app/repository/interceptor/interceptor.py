import typing as t

import attrs
import pyshark
from loguru import logger
from pyshark.capture.capture import TSharkCrashException
from pyshark.packet.layers.xml_layer import XmlLayer as Layer
from pyshark.packet.packet import Packet

logger.bind(context="interceptor")


class EmptyPacket(Exception):
    pass


class WebSocketPacketProcessorInterface(t.Protocol):
    def process(self, packet: Packet) -> None:  # noqa: U100
        ...


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class InterceptorRepository:
    _source_ip: str
    _interceptor_kw: dict[str, t.Any]

    async def _process_packet(self, packet: Packet) -> bytes | None:
        ip_layer: Layer = packet.layers[1]
        ws_layer: Layer = packet.layers[-1]

        logger.debug(f"got new packet: {ip_layer.src} -> {ip_layer.dst}")

        if ip_layer.dst == self._source_ip:
            try:
                logger.debug("Process ws data")
                data: bytes = ws_layer.get_field_value(name="").binary_value
                if not data:
                    raise EmptyPacket
            except (AttributeError, EmptyPacket):
                logger.debug("No data in ws layer")
                logger.debug(ws_layer)
            else:
                return data
        return None

    async def intercept(self) -> t.AsyncGenerator[bytes, None]:
        try:
            capture = pyshark.LiveCapture(**self._interceptor_kw)
            for packet in capture:
                data = await self._process_packet(packet)
                if data:
                    yield data
        except (OSError, KeyboardInterrupt, TSharkCrashException):
            ...
