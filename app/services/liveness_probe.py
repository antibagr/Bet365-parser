import asyncio
import typing as t

import attrs
from aiohttp import web
from loguru import logger


class LivenessProbeInterface(t.Protocol):
    async def is_alive(self) -> bool:
        ...


@t.final
@attrs.define(slots=True, frozen=True, kw_only=True)
class LivenessProbeSrv:
    _resources: list[LivenessProbeInterface]

    async def is_alive(self) -> bool:
        return all(await asyncio.gather(*(res.is_alive() for res in self._resources)))

    async def serve_liveness(self, port: int) -> None:
        """
        Run a simple aiohttp server to serve liveness probe.
        Expose a /health endpoint that returns 200 if all resources are alive, 503 otherwise.
        """

        async def _get_healthcheck(_: web.Request) -> web.Response:
            _app_status = await self.is_alive()
            logger.info(f"Liveness probe request received: {_app_status}")
            if _app_status:
                return web.json_response({"status": "ok"}, status=200)
            return web.json_response({"status": "error"}, status=503)

        app = web.Application()
        app.add_routes([web.get("/health", _get_healthcheck)])
        runner = web.AppRunner(app)
        await runner.setup()
        site = web.TCPSite(runner, host="localhost", port=port)
        logger.info(f"Starting liveness probe server on localhost:{port}/health")
        await site.start()
