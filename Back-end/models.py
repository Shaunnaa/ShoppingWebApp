#from tortoise import Model
from pydantic import BaseModel, Field
import datetime as dt
from datetime import datetime
from pydantic import BaseModel



class items(BaseModel):
    id = int
    item_name: str = Field(..., max_length=50)
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
            item_name="item1", 
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
            item_name="item2",
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
            item_name="item3",
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
            item_name="item4",
            category="category4",
            description="description4",
            original_price=400,
            discount_price=360,
            percent_discount=10,
            offer_expiration_date=datetime.utcnow(),
            image="image4"
            ),
        
        5: items(
            id=5,
            item_name="item5",
            category="category5",
            description="description5",
            original_price=500,
            discount_price=450,
            percent_discount=10,
            offer_expiration_date=datetime.utcnow(),
            image="image5"
            ),

        6: items(
            id=6,
            item_name="item6",
            category="category6",
            description="description6",
            original_price=600,
            discount_price=540,
            percent_discount=10,
            offer_expiration_date=datetime.utcnow(),
            image="image6"
            ),


            
    }

    @classmethod
    def get_all_items(cls):
        return list(cls.items.values())

    
    

