from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from backend.routers import quest, user

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

app.include_router(quest.router)
app.include_router(user.router)