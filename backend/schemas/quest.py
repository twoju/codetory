from pydantic import BaseModel, Field


class QuestBase(BaseModel):
    id: int


class Quest(QuestBase):
    title: str | None = Field(None, example="이야기 공유하기")
    done: bool = Field(False, description="완료 플래그")

    class Config:
        orm_mode = True


class DoneRes(BaseModel):
    id: int

    class Config:
        orm_mode = True