from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from backend.db import Base


class Quest(Base):
    __tablename__ = "quests"


    id = Column(Integer, primary_key=True)
    title = Column(String(1024))


    done = relationship("Done", back_populates="quest", cascade="delete")


class Done(Base):
    __tablename__ = "dones"


    id = Column(Integer, ForeignKey("quests.id"), primary_key=True)

    quest = relationship("Quest", back_populates="done")
