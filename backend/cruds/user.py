from sqlalchemy import select
from sqlalchemy.engine import Result
from sqlalchemy.ext.asyncio import AsyncSession

import backend.models.user as user_model
import backend.schemas.user as user_schema



async def create_user(db: AsyncSession, user_create: user_schema.UserCreate) -> user_model.User:
    user = user_model.User(**user_create.dict())
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user


async def get_user_info(db: AsyncSession, user_id: int) -> user_model.User | None:
    result: Result = await db.execute(
        select(user_model.User).filter(user_model.User.id == user_id)
    )
    return result.scalars().first()

