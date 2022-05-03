from pydantic import BaseModel


class Book(BaseModel):
    author: str
    desc: str
    genre: str
    img: str
    link: str
    pages: str
    rating: str
    title: str
