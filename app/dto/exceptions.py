class EmptyFieldException(Exception):
    """
    Raised when checking for empty fields was omitted.
    Indicates that code is not working as expected.
    """

    def __init__(self, field: str) -> None:
        super().__init__(f"Field {field} is empty")
        self.field = field

    def __str__(self) -> str:
        return f"{self.__class__.__name__}: {self.field}"
