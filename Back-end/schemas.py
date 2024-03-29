import datetime as _dt

import pydantic as _pydantic


class _UserBase(_pydantic.BaseModel):
    email: str


class UserCreate(_UserBase):
    hashed_password: str

    class Config:
        orm_mode = True


class User(_UserBase):
    id: int

    class Config:
        orm_mode = True


class _LeadBase(_pydantic.BaseModel):
    first_name: str
    last_name: str
    email: str
    company: str
    note: str


class LeadCreate(_LeadBase):
    pass


class Lead(_LeadBase):
    id: int
    owner_id: int
    date_created: _dt.datetime
    date_last_updated: _dt.datetime

    class Config:
        orm_mode = True

class _ItemBase(_pydantic.BaseModel):
    item_name: str
    category: str
    description: str
    original_price: float 
    discount_price: float
    percent_discount: int
    offer_expiration_date: _dt.datetime
    image: str
    quantity: int 

class ItemCreate(_ItemBase):
    pass

class Item(_ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True