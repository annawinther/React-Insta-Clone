import React from 'react';
import './App.css';
import PostsPage from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/PostContainer/PostPage.js';
import withAuthenticate from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/Authentication/withAuthenticate.js';
// import Login from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/Login/Login.js';

function App() {
  return (
    <div>
      <ComponentFromWithAuthenticate />
      {/* <Login /> */}
    </div>
  )
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

export default App;
