from pydantic import BaseSettings, SecretStr


class Settings(BaseSettings):
    ENVIRONMENT: str
    DEBUG: bool = False

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT == "prod"


settings = Settings()
