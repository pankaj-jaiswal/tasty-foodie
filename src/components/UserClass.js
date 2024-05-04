// Code  is written in class component - to understand the class component

import React from "react";

class UserClass extends React.Component{
    constructor(props){ // you cannot change the name of props if you change it will show an error in class component 
        super(props);

        console.log(this.props.name + "Child Constructor");

       this.state = {
        count : 0,
        
       }
    }

    componentDidMount(){
        console.log(this.props.name + "Child Component Did Mount");
    
       }

    render(){
        //Destructuring
            const {name, Location, age} = this.props ;
            const {count } = this.state;

     console.log(this.props.name + "Child render");

        return(
            <div className="user-card">
                <h2> Count : {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count +1,
                    });
                }}>Count Increment ++</button>
                <h2> Name : {name}</h2>
                <h3> Location : {Location}</h3>
                <h4> Age : {age}</h4>
                <h4> contact : pankaj@gmail.com</h4>
            </div>
        )
    }
}




export default UserClass;
