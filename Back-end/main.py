from fastapi import FastAPI
from pydantic import BaseModel
from routers import  user
from products import  product

app = FastAPI()


app.include_router(user.router)
app.include_router(product.api)


@app.get("/")
async def root():
    return {"message": "Hello World"}
