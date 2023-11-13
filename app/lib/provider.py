import asyncio
import subprocess
import webbrowser

from loguru import logger
from pydantic import HttpUrl


class BaseDataProvider:
    def __init__(
        self,
        url: HttpUrl | str,
    ) -> None:
        self._opened = False
        self._url = str(url)

    async def open(self) -> None:
        raise NotImplementedError

    async def close(self) -> None:
        raise NotImplementedError


class WindowsChromeDataProvider(BaseDataProvider):
    def __init__(
        self,
        url: HttpUrl | str,
    ) -> None:
        super().__init__(url)
        self._browser = "chrome.exe"

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


class LinuxDataProvider(BaseDataProvider):
    def __init__(
        self,
        url: HttpUrl | str,
    ) -> None:
        super().__init__(url)
        self._proc: subprocess.Popen | None = None

    async def open(self) -> None:
        """
        Open browser and target URL. Close already opened browser if any.
        """

        if self._opened:
            await self.close()

        self._proc = subprocess.Popen(["chrome", "http://www.google.com"])
        self._opened = True

    async def close(self) -> None:
        """
        Close browser if any.
        """

        if self._opened:
            self._proc.terminate()

            _is_closed = asyncio.get_event_loop().run_in_executor(None, self._proc.wait)

            if _is_closed == 0:
                self._opened = False
            else:
                logger.error(f"Can't close {self._browser}")
