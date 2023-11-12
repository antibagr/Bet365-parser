import typing as t

from pydantic import FilePath
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
    )

    ENVIRONMENT: str
    DEBUG: bool
    SOURCE_IP: str
    KEYLOG_FILE_PATH: FilePath
    JSON_DB_PATH: FilePath
    LIVENESS_PROBE_PORT: int

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT == "prod"

    @property
    def INTERCEPTOR_KW(self) -> dict[str, t.Any]:
        return {
            "override_prefs": {"tls.keylog_file": self.KEYLOG_FILE_PATH},
            "debug": True,
            "display_filter": "websocket",
        }


settings = Settings(_env_file=".env")  # type: ignore[call-arg]
