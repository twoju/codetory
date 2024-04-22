from sqlalchemy.orm import Session
from sqlalchemy import select
from sqlalchemy.engine import Result

import backend.models.quest as quest_model
import backend.schemas.quest as quest_schema


def get_quests_with_done(db: Session) -> list[tuple[int, str, bool]]:
    result: Result = db.execute(
        select(
            quest_model.Quest.id,
            quest_model.Quest.title,
            quest_model.Done.id.isnot(None).label("done"),
        ).outerjoin(quest_model.Done)
    )
    return result.all()


def get_done(db: Session, quest_id: int) -> quest_model.Done | None:
    result: Result = db.execute(
        select(quest_model.Done).filter(quest_model.Done.id == quest_id)
    )
    return result.scalars().first()


def create_done(db: Session, quest_id: int) -> quest_model.Done:
    done = quest_model.Done(id=quest_id)
    db.add(done)
    db.commit()
    db.refresh(done)
    return done

