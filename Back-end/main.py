from fastapi import FastAPI
from pydantic import BaseModel
from routers import  user
from products import  product
from login_regsi import login_re

app = FastAPI()


app.include_router(user.router)
app.include_router(login_re.app)
app.include_router(product.api)


@app.get("/")
async def root():
    return {"message": "Hello World"}
