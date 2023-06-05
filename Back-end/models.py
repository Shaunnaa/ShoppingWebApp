#from tortoise import Model
from pydantic import BaseModel
import datetime as dt
from datetime import datetime


class items(BaseModel):
    id = int
    name: str
    category: str
    description: str
    original_price: float
    discount_price: float
    percent_discount: int
    offer_expiration_date: datetime = datetime.utcnow()
    image: str=None
    quantity: int

