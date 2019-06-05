import React from 'react';
import Login from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/Login/Login.js';

const Authenticate = App => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            };
        }

        componentDidMount() {
            if (!localStorage.getItem('user')){
                this.setState({
                    loggedIn: false
                });
            } else {
                this.setState({
                    loggedIn: true
                });
            }
        }

        redner() {
            if (this.state.loggedIn === true) {
                console.log("Im logged in!");
                return (
                    <div>
                        <App />
                    </div>
                );
            } else {
                console.log("I am not logged in");
                return (
                    <div>
                        
                    </div>

                )
                    

            }
        }

    }
}