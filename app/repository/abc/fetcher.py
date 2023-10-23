import abc
import json
import typing as t
from pathlib import Path

import aiofiles  # type: ignore[import]
import aiofiles.os  # type: ignore[import]
import attrs
from loguru import logger

from app.dto.annotations import APIData


@attrs.define(slots=True, frozen=True, kw_only=True)
class ABCFetcher(abc.ABC):
    _response_file_path_pattern: str

    @abc.abstractmethod
    def get_file_path(self) -> Path:
        """
        Child classes should override this method to provide a file path building it from the
        _response_file_path_pattern attribute.
        """
        raise NotImplementedError

    async def load_response_from_file(self) -> APIData:
        """
        Load response from file for debugging purposes and also to provide a data source for the
        dummy fetcher.

        Does not catch any exceptions.
        """
        async with aiofiles.open(self.get_file_path(), mode="r", encoding="utf-8") as f:
            return t.cast(APIData, json.loads(await f.read()))

    async def store_response_to_file(self, payload: APIData) -> None:
        """
        Store response to file for debugging purposes and also to provide a data source for the
        dummy fetcher further down.
        """
        try:
            async with aiofiles.open(self.get_file_path(), mode="w", encoding="utf-8") as f:
                await f.write(json.dumps(payload, ensure_ascii=False, indent=4, sort_keys=True))
        except FileNotFoundError:
            _dir_path: Path = self.get_file_path().parent
            logger.warning(f"Directory {_dir_path} does not exist, creating it and trying again")
            await aiofiles.os.makedirs(_dir_path, exist_ok=True)
            return await self.store_response_to_file(payload)
