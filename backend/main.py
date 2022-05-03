from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Book
from database import fetch_one_book, fetch_random, fetch_all_books

# App object
app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"hello": "world"}


@app.get("/api/book_rand")
async def get_book_rand():
    response = await fetch_random()
    return response


@app.get("/api/book_all")
async def get_book_all():
    response = await fetch_all_books()
    return response


@app.get("/api/book{title}", response_model=Book)
async def get_book_by_name(title):
    response = await fetch_one_book(title)
    if response:
        return response
    raise HTTPException(404, f"No book titled {title}")
