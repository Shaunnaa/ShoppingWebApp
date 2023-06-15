#from tortoise import Model
from pydantic import BaseModel, Field
import datetime as dt
from datetime import datetime


class items(BaseModel):
    id = int
    name: str = Field(..., max_length=50)
    category: str
    description: str
    original_price: float 
    discount_price: float
    percent_discount: int
    offer_expiration_date: datetime = datetime.utcnow()
    image: str=None
    quantity: int = 1

class data():
    items = {
        1: items(
            id=1, 
            name="item1", 
            category="category1", 
            description="description1", 
            original_price=100, 
            discount_price=90, 
            percent_discount=10, 
            offer_expiration_date=datetime.utcnow(), 
            image="image1"
            ),

        2: items(
            id=2,
            name="item2",
            category="category2",
            description="description2",
            original_price=200,
            discount_price=180,
            percent_discount=10,
            offer_expiration_date=datetime.utcnow(),
            image="image2"
            ),

        3: items(
            id=3,
            name="item3",
            category="category3",
            description="description3",
            original_price=300,
            discount_price=270,
            percent_discount=10,
            offer_expiration_date=datetime.utcnow(),
            image="image3"
            ),
        
        4: items(
            id=4,
            name="item4",
            category="category4",
            description="description4",
            original_price=400,
            discount_price=360,
            percent_discount=10,
            offer_expiration_date=datetime.utcnow(),
            image="image4"
            ) 
    }
    
    

