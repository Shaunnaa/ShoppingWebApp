from fastapi import FastAPI
from fastapi import APIRouter
from pydantic import BaseModel
from models import items

app = FastAPI()

products = APIRouter(
    prefix="/product",
    tags=["product"],
    responses={404: {"message": "Not found"}}
)

@products.get("/products")
async def get_all_products():
    return {"products": "products"}

@products.post("/products")
async def add_new_product(product):
    return {"product_name": product.name, "product_price": product.price}

@products.get("/products/{product_id}")
async def get_product_by_id(product_id: int):
    return {"product_id": product_id}

@products.delete("/products/{product_id}")
async def delete_product_by_id(product_id: int):
    return {"product_id": product_id}


@products.get("/cart")
def get_cart():
    return {"cart": "cart"}

@products.post("/cart/add")
def add_product_to_cart(item: items):
    return {"item": item.name, "quantity": item.quantity}

@products.put("/cart/addquantity/{item_id}")
def add_quantity_to_cart(item_id: int, quantity: int):
    return {"item_id": item_id, "quantity": quantity}

@products.delete("/cart/remove/{item_id}")
def remove_product_from_cart(item_id: int):
    return {"item_id": item_id}

@products.delete("/cart/remove/all")
def remove_all_products_from_cart():
    return {"message": "All items removed from cart"}

