import React from 'react'

const SearchBar = ({searchChange}) => {
    return (
        <div>
            <input
            className = 'bg-lightest-blue b--green pa3 mb4 ba'
            type = 'search' 
            placeholder = 'Search Bots' 
            onChange = {searchChange}
            />
        </div>
    )
}

export default SearchBar;
