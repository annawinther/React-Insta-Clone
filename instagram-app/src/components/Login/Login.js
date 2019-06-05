import React, { Component } from 'react';

export default class Login extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            username: ''
        };
    }
    handleInputChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value 
        })
    }

    handleLogIn = (event) => {
        event.preventDefault();
        const username = this.state.username;
        localStorage.setItem("user", username);
        window.location.reload();
    }

    render(){
        return (
            <div>
                <form>
                   <h2>Username</h2> 
                   <input
                     name="username"
                     type="text"
                     onChange={this.handleInputChange}
                     value={this.username}
                     />
                    <h2>Passowrd</h2>
                    <input
                     name="password"
                     type="password"
                    />
                    <button
                    onClick={this.handleLogIn}
                    >
                    Sign In
                    </button>
                    
                </form>
            </div>

        )
    }
}