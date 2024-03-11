# import json
# import os
# from pathlib import Path
#
# from sqlalchemy import create_engine
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker
#
# BASE_DIR = Path(__file__).resolve().parent.parent
# SECRET_FILE = os.path.join(BASE_DIR, 'secrets.json')
#
# with open(SECRET_FILE) as f:
#     secrets = json.load(f)
#
# DB = secrets["DB"]
#
# DB_URL = f'mysql+pymysql://{DB["USER"]}:{DB["PASSWORD"]}@{DB["HOST"]}:{DB["PORT"]}/{DB["DATABASE"]}'
#
# engine = create_engine(
#     DB_URL, encoding='utf-8'
# )
#
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
#
# Base = declarative_base()
