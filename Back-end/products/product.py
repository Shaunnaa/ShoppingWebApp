from fastapi import FastAPI
from fastapi import APIRouter
from pydantic import BaseModel
from models import items, data

app = FastAPI()

api = APIRouter(
    prefix="/product",
    tags=["product"],
    responses={404: {"message": "Not found"}}
)

@api.get("/AllProducts")
async def get_all_products():
    return data.items

@api.post("/NewProduct")
async def add_new_product(item: items):
    return {"item_name": item.name, "item_price": item.original_price}


@api.get("/GetProducts/{product_id}")
async def get_product_by_id(product_id: int):
    product = data.items.get(product_id)
    if product:
        return product
    else:
        return {"message": "Product not found"}

# @api.get("/GetProducts/{product_category}")
# async def get_product_by_category(product_category: str):
#     for item in data.items:
#         if item.category == product_category:
#             return item
#         else:
#             return {"message": "Category of product not found"}

@api.delete("/DeleteProducts/{product_id}")
async def delete_product_by_id(product_id: int):
    return {"product_id": product_id}


#------ cart ------
cart = []

@api.get("/cart")
def get_cart():
    return cart

@api.post("/cart/add")
def add_product_to_cart(product_id: int):
    cart.append(data.items.get(product_id)) #show all
    # product = data.items.get(product_id)
    # if product is not None:
    #     cart.append({
    #         "id": product.id,
    #         "name": product.name,
    #         "original_price": product.original_price,
    #         "discount_price": product.discount_price,
    #         "percent_discount": product.percent_discount,
    #         "image": product.image
    #     })

@api.put("/cart/addquantity/{item_id}")
def add_quantity_to_cart(item_id: int, quantity: int):
    return {"item_id": item_id, "quantity": quantity}

@api.delete("/cart/remove/{item_id}")
def remove_product_from_cart(item_id: int):
    cart.remove(data.items.get(item_id))

@api.delete("/cart/remove/all")
def remove_all_products_from_cart():
    cart.clear()


