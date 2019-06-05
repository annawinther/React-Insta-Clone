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
      posts: dummyData,
      likes: props.likes,
    }
  }

  componentDidMount() {
    this.setState({ dummyData })
  }

  incrementLikes = (event, postIndex) => {
    const updatedPost = this.state.posts.map((post, index)=> {
         if (postIndex === index) {
            post.likes = post.likes + 1
         }
         return post;
     })
     this.setState({
         posts: updatedPost
     })
     console.log('clicking')
    console.log(updatedPost)
 }

  render(){
    return (
      <div className="post-container">
      <SearchBar />
      
        {this.state.posts.map((post, index) => (
          <PostContainer
            key={index}
            comments={post.comments}
            post={post}
            incrementLikes={this.incrementLikes}
          />
        ))}
     </div>
    )
  }

}


export default App;
