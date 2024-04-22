from sqlalchemy import create_engine


from backend.models.quest import Base as QuestBase
from backend.models.user import Base as UserBase


DB_URL = "mysql+pymysql://root@db:3306/codetory?charset=utf8"
engine = create_engine(DB_URL, echo=True)

BaseList = [QuestBase, UserBase]

def reset_database():
    for base in BaseList:
        base.metadata.drop_all(bind=engine)
        base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    reset_database()
