from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

import backend.schemas.user as user_schema
import backend.cruds.user as user_crud
from backend.db import get_db

router = APIRouter()


@router.post("/users", response_model=user_schema.UserCreateRes)
async def create_user(user_body: user_schema.UserCreate, db: AsyncSession = Depends(get_db)):
    return await user_crud.create_user(db, user_body)

