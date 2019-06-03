import React from 'react';
// import logo from './logo.svg';
import dummyData from './dummy-data'
import PostContainer from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/PostContainer/PostContainer.js';
// import CommentSection from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/CommentSection/CommentSectionContainer.js';
import './App.css';


function App() {
  return (
    <div>
      {/* <SearchBar /> */}
      <div>
        {
          dummyData.map(post => (
          <PostContainer 
          key={post.timestamp.trim()}
          post={post}
          />
          ))
        }

      </div>
    </div>
  );
}

export default App;
