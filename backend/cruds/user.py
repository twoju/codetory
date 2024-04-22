from sqlalchemy import select
from sqlalchemy.engine import Result
from sqlalchemy.ext.asyncio import AsyncSession

import backend.models.user as user_model
import backend.schemas.user as user_schema



async def create_user(db: AsyncSession, user_create: user_schema.UserCreate) -> user_model.User:
    user = await user_model.User(**user_create.dict())
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user

