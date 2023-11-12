import pydantic


class BaseModel(pydantic.BaseModel):
    class Config:
        extra = "allow"
        allow_mutation = False
        validate_assignment = True