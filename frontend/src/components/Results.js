import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './results.css'

function Results({ searchText }) {
    const [bookList, setBookList] = useState([{}])
    const [randomBookList, setRandomBookList] = useState([{}])

    useEffect(() => {
        axios.get('http://localhost:8000/api/book_all')
            .then(res => {
                setBookList(res.data)
                axios.get('http://localhost:8000/api/book_rand')
                    .then(ret => setRandomBookList(ret.data))
            })
    }, [])

    // Mapping functions
    const toTitle = title => <p className='book-title'>{title}</p>
    const toAuthor = author => <p className='book-author'>{author}</p>

    // Filter function
    function searchFilter(book) {
        return book.title.toLowerCase().includes(searchText.toLowerCase())
    }


    /*
    if (search) then display results
    else display random books
    */


    var displayedList = []
    var heading = ''

    if (searchText) {
        displayedList = bookList.filter(searchFilter)
        heading = 'Results'
    } else {
        displayedList = randomBookList
        heading = 'Recommended'
    }

    var bookDetails = []
    const titles = displayedList.map((book) => book.title).map(toTitle)
    const authors = displayedList.map((book) => book.author).map(toAuthor)

    // Store title ans author inside a div
    titles.forEach((title, a) => bookDetails.push(<div className='book-card'>{title}{authors[a]}</div>))

    console.log(bookDetails)



    return (
        <div className='result-container'>
            <h3>{heading}</h3>
            {bookDetails}
        </div>
    )
}

export default Results