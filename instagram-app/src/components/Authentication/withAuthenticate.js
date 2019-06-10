import React from 'react';

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