from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/user",
    tags=["User"],
    responses={404: {"message": "Not found"}}
)

user_db = [
    {
        "name": "Alice",
        "email": "aliceiscute@test.com"
    },
    {
        "name": "BOB",
        "email": "bobboo@test.com"
    },
    {
        "name": "John",
        "email": "johnjonh@test.com"
    }
]

class User(BaseModel):
    name: str
    email: str
    # age: int
    password: str


@router.get("/")
async def get_users():
    return user_db


@router.get("/{user_id}") # get user by id
async def get_user_id(user_id: int):
    if 1 <= user_id <= len(user_db):
        return user_db[user_id-1]
    else:
        return {"message": "User not found"}

@router.get("/name/{user_name}") # get user by name
async def get_user_name(user_name: str):
    for user in user_db:
        if (user['name'] == user_name):
            return user
    
    return {"message": "User not found"}

@router.post("/") #create new user
async def create_user(user: User):
    result = user.dict()
    user_db.append(result)
    return user_db[-1]

@router.put("/{user_id}") # edit user information by id
async def edit_user(user_id: int, user: User):
    result = user.dict()
    user_db[user_id-1].update(result)
    return result

@router.delete("/{user_id}")
async def edit_user(user_id: int):
    user = user_db.pop(user_id-1)
    return user