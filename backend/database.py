from model import Book
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://127.0.0.1:27017")

database = client.BookDB
collection = database.book


async def fetch_one_book(title):
    document = await collection.find_one({"title": title})
    return document


async def fetch_all_books():
    books = []
    cursor = collection.find({})
    async for document in cursor:
        books.append(Book(**document))
    return books


async def fetch_random():
    books = []
    cursor = collection.aggregate([{"$sample": {"size": 3}}])
    async for document in cursor:
        books.append(Book(**document))
    return books
