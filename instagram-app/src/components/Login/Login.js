import React, { Component } from 'react';

export default class Login extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            username: ''
        };
    }

    render(){
        return (
            <div>
                <form>
                   <h2>Username</h2> 
                   <input
                     name="username"
                     type="text"
                     onchange={this.handleInputChange}
                     value={this.username}
                     />
                    <h2>Passowrd</h2>
                   
                </form>
            </div>

        )
    }
}