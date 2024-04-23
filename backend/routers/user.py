import os
import httpx

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

import backend.schemas.user as user_schema
import backend.cruds.user as user_crud

from backend.db import get_db

NAVER_CLIENT_ID = os.getenv("NAVER_CLIENT_ID")
NAVER_CLIENT_SECRET = os.getenv("NAVER_CLIENT_SECRET")

router = APIRouter()


@router.post("/users", response_model=user_schema.UserCreateRes)
async def create_user(user_body: user_schema.UserCreate, db: AsyncSession = Depends(get_db)):
    return await user_crud.create_user(db, user_body)


@router.get("/users/{user_id}", response_model=user_schema.User)
async def get_user(user_id: int, db: AsyncSession = Depends(get_db)):
    return await user_crud.get_user_info(db, user_id)


@router.get("/login")
async def get_naver_token(code: str):
    try:
        token_url = "https://nid.naver.com/oauth2.0/token"
        data = {
            "grant_type": "authorization_code",
            "client_id": NAVER_CLIENT_ID,
            "client_secret": NAVER_CLIENT_SECRET,
            "code": code
        }
        response = httpx.post(token_url, data=data)
        response_data = response.json()
        
        if response_data.get("access_token"):
            return {"access_token": response_data["access_token"]}
        else:
            raise HTTPException(status_code=response.status_code, detail=response_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/login/info")
async def get_user_naver_info(token: str):
    try:
        req_url = "https://openapi.naver.com/v1/nid/me"
        header = "Bearer " + token

        response = httpx.post(req_url, headers={"Authorization": header})
        response_data = response.json()

        if response_data.get("response"):
            res = response_data.get("response")
            data = {
                "name": res["name"],
                "email": res["email"]
            }
            return data
        else:
            raise HTTPException(status_code=response.status_code, detail=response_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
