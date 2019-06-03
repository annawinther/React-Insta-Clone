import React, { Component } from 'react';
// import logo from './logo.svg';
import dummyData from './dummy-data'
import PostContainer from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/PostContainer/PostContainer.js';
import CommentSection from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/CommentSection/CommentSectionContainer.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div>
        <PostContainer posts={this.state.posts} />
        <CommentSection />
      </div>
    )
  }
}

export default App;
