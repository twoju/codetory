import json
import os
from pathlib import Path

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_FILE = os.path.join(BASE_DIR, 'secrets.json')

with open(SECRET_FILE) as f:
    secrets = json.load(f)

DB = secrets["DB"]

DB_URL = f'mysql+pymysql://{DB["USER"]}:{DB["PASSWORD"]}@{DB["HOST"]}:{DB["PORT"]}/{DB["DATABASE"]}?charset=utf8mb4'


class Engineconn:

    def __init__(self):
        self.engine = create_engine(DB_URL, pool_recycle = 500)

    def sessionmaker(self):
        Session = sessionmaker(bind=self.engine)
        session = Session()
        return session

    def connection(self):
        conn = self.engine.connect()
        return conn

# engine = create_engine(
#     DB_URL
# )
#
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
