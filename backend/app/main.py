from typing import List

from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

from .models import Test
from .database import Engineconn

# models.Base.metadata.create_all(bind=engine)

app = FastAPI()
origins = [
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = Engineconn()
session = engine.sessionmaker()


class Item(BaseModel):
    name: str
    number: int


# 종속성 만들기 : 요청 당 독립적인 데이터베이스 세션/연결이 필요하고 요청이 완료되면 닫음
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


@app.get("/")
async def first_get():
    exp = session.query(Test).all()
    return exp
