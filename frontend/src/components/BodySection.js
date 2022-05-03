import React, { useState } from 'react'
import './body-section.css'
import Results from './Results'

function BodySection() {
    return (
        <div className='body-section'>
            <h2>Welcome to the BookSearch!</h2>
            <Searchbar />
        </div>
    )
}

function Searchbar() {
    const [searchText, setSearchText] = useState('')

    const handleSearchChange = (event) => {
        setSearchText(event.target.value)
    }
    const handleSubmit = event => {
        alert('Query searched.')
    }

    return (
        <div className='section-container'>
            <form className='search-container' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='searchbar'
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder='Search anything...' />
                <button type='submit' className='search-btn'>Search</button>
            </form>
            <Results searchText={searchText} />
        </div>
    )
}

export default BodySection;