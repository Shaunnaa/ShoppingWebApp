from fastapi import FastAPI, Request
from fastapi import APIRouter
from typing import List
import fastapi as _fastapi
from pydantic import BaseModel
from models import items, data
import sqlalchemy.orm as _orm
import services as _services, schemas as _schemas


app = FastAPI()

api = APIRouter(
    prefix="/product",
    tags=["product"],
    responses={404: {"message": "Not found"}}
)

# @api.get("/AllProducts", response_model=List[items])
# async def get_all_products():
#     # Get all the values from the dictionary and return as a list
#     return data.get_all_items()

@api.get("/AllProducts", response_model=List[_schemas.Item])
async def get_allproduct(db: _orm.Session = _fastapi.Depends(_services.get_db)):
    return await _services.get_allproduct(db=db)


@api.post("/NewProduct", response_model=_schemas.Item)
async def add_new_product(item: _schemas.ItemCreate, user: _schemas.User = _fastapi.Depends(_services.get_current_user), db: _orm.Session = _fastapi.Depends(_services.get_db)):
    return await _services.create_items(user=user, db=db, item=item)


@api.get("/GetProducts/{product_id}", status_code=200)
async def get_product_by_id(product_id: int, db: _orm.Session = _fastapi.Depends(_services.get_db)):
   return await _services.get_item(product_id, db)

# @api.get("/GetProducts/{product_category}")
# async def get_product_by_category(product_category: str):
#     for item in data.items:
#         if item.category == product_category:
#             return item
#         else:
#             return {"message": "Category of product not found"}

@api.delete("/DeleteProducts/{product_id}", status_code=204)
async def delete_product_by_id(product_id: int,user: _schemas.User = _fastapi.Depends(_services.get_current_user), db: _orm.Session = _fastapi.Depends(_services.get_db)):
    await _services.delete_item(product_id, user, db)
    return {"message", "Successfully Deleted"}

@api.get("/GetProducts_quantity/{product_id}", status_code=200)
async def get_product_quantity(product_id: int, db: _orm.Session = _fastapi.Depends(_services.get_db)):
   return await _services.get_quantity(product_id, db)

@api.put("/UpdateProducts_quantity/{product_id}/{quantity}", status_code=200)
async def update_product_quantity(product_id: int,quantity: int,user: _schemas.User = _fastapi.Depends(_services.get_current_user) ,db: _orm.Session = _fastapi.Depends(_services.get_db)):
   return await _services.update_quantity(product_id,quantity,user, db)


# client = http3.AsyncClient()

# async def call_api(url: str):
#     r = await client.get(url)
#     json_data = json.loads(r.text)
#     pretty_json = json.dumps(json_data)
#     return pretty_json


#------ cart ------
cart = []

@api.get("/cart")
def get_cart():
    return cart


@api.post("/cart/add/{product_id}")
async def add_product_to_cart(product_id: int, db: _orm.Session = _fastapi.Depends(_services.get_db)):
    # get_id_item = f'http://127.0.0.1:8000/product/GetProducts/{product_id}' # call the item from the product id and get the json
    # item = data.items.get(product_id)
    # item = await call_api(get_id_item)
    item = await _services.get_item(product_id, db)
    if item in cart:
        # If the item is already in the cart, increase the quantity
        item.quantity += 1 # quantity in data
    else:
        cart.append(item)
    return item
    

@api.put("/cart/removequantity/{product_id}")
async def remove_quantity_to_cart(product_id: int, db: _orm.Session = _fastapi.Depends(_services.get_db)):
    # item = data.items.get(product_id)
    item = await _services.get_item(product_id, db)
    
    if item in cart and item.quantity > 1:
        item.quantity -= 1 
    else:
        cart.remove(item)
        return {"message": "Successfully remove"}

@api.delete("/cart/remove/{product_id}")
async def remove_product_from_cart(product_id: int, db: _orm.Session = _fastapi.Depends(_services.get_db)):
    item = await _services.get_item(product_id, db)
    cart.remove(item)

@api.delete("/cart/remove/all")
async def remove_all_products_from_cart():
    cart.clear()


