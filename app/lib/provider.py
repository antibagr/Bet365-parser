import asyncio
import webbrowser

from loguru import logger
from pydantic import HttpUrl


class WindowsDataProvider:
    _browser: str

    def __init__(
        self,
        url: HttpUrl | str,
    ) -> None:
        self._opened = False
        self._url = str(url)

    async def open(self) -> None:
        """
        Open browser and target URL. Close already opened browser if any.
        """

        if self._opened:
            await self.close()

        webbrowser.open(self._url)
        self._opened = True

    async def close(self) -> None:
        """
        Close browser if any.
        """

        cmd = f"taskkill /im {self._browser} /f"

        if self._opened:
            proc = await asyncio.create_subprocess_shell(
                cmd, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE
            )

            _is_closed = await proc.wait()

            if _is_closed == 0:
                self._opened = False
            else:
                logger.error(f"Can't close {self._browser}")


class WindowsChromeDataProvider(WindowsDataProvider):
    _browser = "chrome.exe"
