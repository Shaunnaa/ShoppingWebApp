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
    quantity: int

