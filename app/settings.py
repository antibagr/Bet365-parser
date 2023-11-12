from pydantic_settings import BaseSettings
from pydantic import FilePath

import typing as t


class Settings(BaseSettings):
    ENVIRONMENT: str
    DEBUG: bool = False

    KEYLOG_FILE_PATH: FilePath = r"C:\Users\RapRocket\SSLKEYS\sslkeylog.log"
    JSON_DB_PATH: FilePath = "db.json"
    SOURCE_IP: str

    LIVENESS_PROBE_PORT: int = 8080

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


settings = Settings()
