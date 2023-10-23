from app.dto.annotations import APIData


class APIError(Exception):
    ...


class UnsupportedMarketError(Exception):
    ...


class UnsupportedSubMarketError(Exception):
    ...


class UnsupportedDataStructureError(Exception):
    """
    Generic parser error for unsupported data structure.
    """

    market: APIData

    def __init__(self, message: str, market: APIData) -> None:
        super().__init__(message)
        self.market = market

    def __str__(self) -> str:
        return f"{self.__class__.__name__}({self.args[0]}, {self.market})"
