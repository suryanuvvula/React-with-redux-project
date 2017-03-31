import React, {Component} from 'react';

import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar_funcComponent'; // If we are importing our own js files which we have written then we 
// need to pass the complete path of that file and this is a functional based component

import SearchBarten from './components/search_bar_classComponent';

import StateExample from './components/state_Example';

import VideoList from './components/videolist';

import VideoListItem from './components/videolist_item';

import VideoDetails from './components/videodetails';


const API_KEY = "AIzaSyDZ1A1XW8k8gAm80KkDDiFFTE5kTc6PZeI";



//React is used to create and manage our components 
//React DOM is used to interact with the DOM elements
//Always one component for one file

// declaring the variables as const will not allow those variables to reassign with any values

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos : [],
            selectedVideo : null
        };

        YTSearch({key : API_KEY,term : 'searchData'},(videos) =>{
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            }); // we can assign directly the value if the property value is same as call back function value
         //   this.setState({videos : videos});
            console.log(videos)
            
        });

    }
    render(){
    return (
        <div>
         <SearchBar />
         <VideoDetails video={this.state.selectedVideo}/>
         <VideoList videos={this.state.videos} />
         
        </div>
    );
    }
}

ReactDOM.render(<App /> , document.querySelector(".container"));

