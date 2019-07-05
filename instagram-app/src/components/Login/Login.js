import React, { Component } from 'react';
import styled from 'styled-components';

const LoginStyled = styled.div`
    /* border: 1px solid grey;
    background: white;
    width: 60%;
    height: 300px;
    margin: 0 auto;
    text-align: center; */
    /* display: flex;
    flex-direction: column;
    height: 100vh;
    background: #FFFFFF;
    width: 100%;
    color: #333; */
    align-items: center;
    background: #EFEFEF;
    /* background: linear-gradient(135deg, #07a0c3 0%,#89bde5 100%); */
    margin: 0 auto;
    margin-top: 50px;
    padding: 3.5rem;
    height: 500px;
    width: 350px;
    text-align: left; 
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    input {
        width: 100%;
        height: 40px;
        font-size: 1rem;
    }

    button{
        width: 102%;
        height: 40px;
        font-size: 1rem;
        margin-top: 20px;
        color: black;
        background-image: radial-gradient( circle farthest-corner at 0.2% 0.5%,  rgba(252,165,241,1) 0%, rgba(181,255,255,1) 100.2% );;

    }
    button:hover{
        background: #efefef;
        border: 1px solid #07a0c3;
        color: #07a0c3;
        cursor: pointer;
        transition: 0.3s ease-out;
    }
`;

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
            <LoginStyled>
                <h1>Log in</h1>
                <form>
                   <h2>Username</h2> 
                   <input
                     name="username"
                     type="text"
                     onChange={this.handleInputChange}
                     value={this.username}
                     />
                    <h2>Password</h2>
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
            </LoginStyled>

        )
    }
}