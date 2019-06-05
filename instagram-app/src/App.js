import React, { Component} from 'react';
// import logo from './logo.svg';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer.js';
// import CommentSection from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/CommentSection/CommentSectionContainer.js';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dummyData: dummyData,
      likes: props.likes,
    }
  }

  componentDidMount() {
    this.setState({ dummyData })
  }

 

  render(){
    return (
      <div className="post-container">
      <SearchBar />
      
        {this.state.dummyData.map((post, index) => (
          <PostContainer
            key={index}
            comments={post.comments}
            post={post}
            IncrementLikes={this.IncrementLikes}
          />
        ))}
     </div>
    )
  }

}


export default App;
