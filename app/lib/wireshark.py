import typing as t

import pyshark
from loguru import logger
from pyshark.capture.capture import StopCapture, TSharkCrashException
from pyshark.packet.layers.xml_layer import XmlLayer as Layer
from pyshark.packet.packet import Packet

PacketCallback: t.TypeAlias = t.Callable[[t.Any], t.Coroutine[t.Any, t.Any, bytes | None]]


class EmptyPacket(Exception):
    pass


class AsyncLiveCapture(pyshark.LiveCapture):
    async def _go_through_packets_from_fd(self, fd, packet_callback, packet_count=None):
        """
        A coroutine which goes through a stream and calls a given
        callback for each XML packet seen in it.
        """

        packets_captured = 0
        self._log.debug("Starting to go through packets")

        parser = self._setup_tshark_output_parser()
        data = b""

        while True:
            try:
                packet, data = await parser.get_packets_from_stream(
                    fd, data, got_first_packet=packets_captured > 0
                )
            except EOFError:
                self._log.debug("EOF reached")
                self._eof_reached = True
                break

            if packet:
                packets_captured += 1
                try:
                    await packet_callback(packet)
                except StopCapture:
                    self._log.debug("User-initiated capture stop in callback")
                    break

            if packet_count and packets_captured >= packet_count:
                break

    async def intercept(
        self,
        coro_callback: PacketCallback,
        packet_count: int | None = None,
        close_subprocess: bool = True,
    ) -> None:
        await self.packets_from_tshark(
            coro_callback, packet_count=packet_count, close_tshark=close_subprocess
        )


class WireSharkInterCeptor:
    source_ip: str
    interceptor_parameters: dict[str, t.Any]
    data_callback: PacketCallback

    def __init__(
        self,
        source_ip: str,
        interceptor_parameters: dict[str, t.Any],
    ) -> None:
        self.source_ip = source_ip
        self.interceptor_parameters = interceptor_parameters
        self.data_callback = None  # type: ignore

    async def packet_callback(self, packet: Packet) -> bytes | None:
        ip_layer: Layer = packet.layers[1]
        ws_layer: Layer = packet.layers[-1]

        logger.debug(f"got new packet: {ip_layer.src} -> {ip_layer.dst}")

        if ip_layer.dst == self.source_ip:
            try:
                data: bytes = ws_layer.get_field_value(name="").binary_value
                if data == b"":
                    raise EmptyPacket
            except (AttributeError, EmptyPacket):
                logger.debug("No data in ws layer")
            else:
                await self.data_callback(data)
        return None

    async def intercept(self, data_callback: PacketCallback) -> None:
        try:
            self.data_callback = data_callback
            capture = AsyncLiveCapture(**self.interceptor_parameters)
            await capture.intercept(self.packet_callback, close_subprocess=False)
        except (OSError, KeyboardInterrupt, TSharkCrashException):
            ...
