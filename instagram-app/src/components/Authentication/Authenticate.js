import React from 'react';
import Login from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/Login/Login.js';
import PostsPage from '../PostContainer/PostPage';

const Authenticate = App => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            };
        }

        componentDidMount() {
            const user = localStorage.getItem("user");
            console.log(user);
            if (user){
                this.setState({
                    loggedIn: true
                });
            } else {
                this.setState({
                    loggedIn: false
                });
            }
        }

        render() {
            if (this.state.loggedIn) {
                console.log("Im logged in!");
                return (
                    <div>
                        <PostsPage />
                    </div>
                );
            } else {
                console.log("I am not logged in");
                return (
                    <div>
                        <Login />
                    </div>

                );
            }
        }
    }
}

export default Authenticate;