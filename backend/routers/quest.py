from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.ext.asyncio import AsyncSession

import backend.schemas.quest as quest_schema
import backend.cruds.quest as quest_crud
from backend.db import get_db

router = APIRouter()

@router.get("/quests", response_model=list[quest_schema.Quest])
async def list_quests(db: AsyncSession = Depends(get_db)):
    return await quest_crud.get_quests_with_done(db)

@router.put("/quests/{quest_id}/done", response_model=quest_schema.DoneRes)
async def quest_done(quest_id: int, db: AsyncSession = Depends(get_db)):
    done = await quest_crud.get_done(db, quest_id=quest_id)
    if done is not None:
        raise HTTPException(status_code=400, detail="이미 완료된 퀘스트입니다.")
    
    return await quest_crud.create_done(db, quest_id)

