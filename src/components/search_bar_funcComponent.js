import React from 'react';


// This is called a functional component since we done with using a ES6 function
const SearchBar = () => {
    return <input onChange={event => console.log(event.target.value)}/>;
}

export default SearchBar;