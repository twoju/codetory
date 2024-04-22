from pydantic import BaseModel, Field


class UserBase(BaseModel):
    username: str | None = Field(None, example="김준서")
    email: str | None = Field(None, example="codetory@gmail.com")


class UserCreate(UserBase):
    pass


class UserCreateRes(UserCreate):
    id: int

    class Config:
        orm_mode = True


class User(UserBase):
    id: int

    class Config:
        orm_mode = True
