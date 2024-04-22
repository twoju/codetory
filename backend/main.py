from fastapi import FastAPI

from backend.routers import quest

app = FastAPI()

app.include_router(quest.router)