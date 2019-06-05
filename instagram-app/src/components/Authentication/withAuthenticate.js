import React from 'react';
import Login from '../Login/Login';


const withAuthenticate = (PostPage) => (Login) => {
  return class extends React.Component {
    render() {
      return ( 
      <div>
           <PostPage />
            <Login />;
      </div>
      )
    }
  };
}

  export default withAuthenticate;