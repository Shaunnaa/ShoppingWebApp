from fastapi import APIRouter
from typing import List
import fastapi as _fastapi
import fastapi.security as _security

import sqlalchemy.orm as _orm
import services as _services, schemas as _schemas

router = APIRouter(
    prefix="/login_register",
    tags=["login_register"],
    responses={404: {"message": "Not found"}}
)


@router.post("/api/users")
async def create_user(
    user: _schemas.UserCreate, db: _orm.Session = _fastapi.Depends(_services.get_db)
):
    db_user = await _services.get_user_by_email(user.email, db)
    if db_user:
        raise _fastapi.HTTPException(status_code=400, detail="Email already in use")

    user = await _services.create_user(user, db)

    return await _services.create_token(user)

@router.post("/api/token")
async def generate_token(form_data: _security.OAuth2PasswordRequestForm = _fastapi.Depends(), db: _orm.Session = _fastapi.Depends(_services.get_db)):
    user = await _services.authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise _fastapi.HTTPException(status_code=401,detail="Invalid Credentials")
    
    return await _services.create_token(user)

@router.get("/api/users/me", response_model=_schemas.User)
async def get_user(user: _schemas.User = _fastapi.Depends(_services.get_current_user)):
    return user

@router.post("/api/leads", response_model=_schemas.Lead)
async def create_lead(lead: _schemas.LeadCreate, user: _schemas.User = _fastapi.Depends(_services.get_current_user), db: _orm.Session = _fastapi.Depends(_services.get_db)):
    return await _services.create_lead(user=user, db=db,lead=lead)

@router.get("/api/leads", response_model=List[_schemas.Lead])
async def get_leads(user: _schemas.User = _fastapi.Depends(_services.get_current_user), db: _orm.Session = _fastapi.Depends(_services.get_db)):
    return await _services.get_leads(user=user, db=db)

@router.get("/api/leads/{lead_id}", status_code=200)
async def get_leads(lead_id: int,user: _schemas.User = _fastapi.Depends(_services.get_current_user), db: _orm.Session = _fastapi.Depends(_services.get_db)):
    return await _services.get_leads(lead_id, user, db)

@router.delete("/api/leads/{lead_id}", status_code=204)
async def delete_lead(lead_id: int,user: _schemas.User = _fastapi.Depends(_services.get_current_user), db: _orm.Session = _fastapi.Depends(_services.get_db)):
  
    await _services.delete_lead(lead_id, user, db)
    return {"message", "Successfully Deleted"}

@router.put("/api/leads/{lead_id}", status_code=200)
async def update_lead(
    lead_id: int,
    lead: _schemas.LeadCreate,
    user: _schemas.User = _fastapi.Depends(_services.get_current_user),
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    await _services.update_lead(lead_id, lead, user, db)
    return {"message", "Successfully Updated"}

@router.get("/api")
async def root():
    return {"message": "Register and Login"}
