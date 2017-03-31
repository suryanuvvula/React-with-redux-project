import React ,{Component} from 'react';

class StateExample extends Component{

    // we initialize the constructor by passing this.state in constructor function
    constructor(){
        super();
     this.state = {term : 'asfsaf'} // state is a plain javascript object that exists on any class based component
    }

    render(){
   // line 15 setting the state value by using setState method
   //line 15 the value of input is passed from state and this is called controlled components or controlled elements
        return (
            <div>
        <input value={this.state.term} onChange={event => this.setState({term : event.target.value})} /> 
        Value of my state : {this.state.term}
        </div>
        );
    }
}

export default StateExample;