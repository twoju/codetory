from fastapi import APIRouter

import backend.schemas.quest as quest_schema

router = APIRouter()

@router.get("/quests", response_model=list[quest_schema.Quest])
async def list_quests():
    return [quest_schema.Quest(id=1, title="첫 번째 퀘스트")]

@router.put("/quests/{quest_id}/done")
async def quest_done():
    pass