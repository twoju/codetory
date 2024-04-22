from pydantic import BaseModel, Field


class Quest(BaseModel):
    id: int
    title: str | None = Field(None, example="이야기 공유하기")
    done: bool = Field(False, description="완료 플래그")
