from sqlalchemy import select
from sqlalchemy.engine import Result
from sqlalchemy.ext.asyncio import AsyncSession

import backend.models.quest as quest_model
import backend.schemas.quest as quest_schema


async def get_quests_with_done(db: AsyncSession) -> list[tuple[int, str, bool]]:
    result: Result = await db.execute(
        select(
            quest_model.Quest.id,
            quest_model.Quest.title,
            quest_model.Done.id.isnot(None).label("done"),
        ).outerjoin(quest_model.Done)
    )
    return result.all()


async def get_done(db: AsyncSession, quest_id: int) -> quest_model.Done | None:
    result: Result = await db.execute(
        select(quest_model.Done).filter(quest_model.Done.id == quest_id)
    )
    return result.scalars().first()


async def create_done(db: AsyncSession, quest_id: int) -> quest_model.Done:
    done = quest_model.Done(id=quest_id)
    db.add(done)
    await db.commit()
    await db.refresh(done)
    return done

