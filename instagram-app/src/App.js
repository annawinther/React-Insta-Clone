import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostPage.js';
import withAuthenticate from './components/Authentication/withAuthenticate.js';
import Authenticate from './components/Authentication/Authenticate.js';


function App() {
  return (
    <div>
      <ComponentFromWithAuthenticate />
    </div>
  )
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

export default Authenticate(App);


