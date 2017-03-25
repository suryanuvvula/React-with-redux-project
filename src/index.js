import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar_funcComponent'; // If we are importing our own js files which we have written then we 
// need to pass the complete path of that file and this is a functional based component

import searchBarten from './components/search_bar_classComponent';

const API_KEY = "AIzaSyDZ1A1XW8k8gAm80KkDDiFFTE5kTc6PZeI";

//React is used to create and manage our components 
//React DOM is used to interact with the DOM elements
//Always one component for one file

// declaring the variables as const will not allow those variables to reassign with any values

const App = () => {
    return (
        <div>
         <SearchBar />
         <searchBarten />
        </div>
    );
}

ReactDOM.render(<App /> , document.querySelector(".container"));

