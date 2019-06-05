import React from 'react';
// import Login from '../Login/Login';

 function withAuthenticate(Component) {
  return class extends React.Component {
    render() {
      return ( 
      <div>
           <Component />
      </div>
      )
    }
  };
}

  export default withAuthenticate;