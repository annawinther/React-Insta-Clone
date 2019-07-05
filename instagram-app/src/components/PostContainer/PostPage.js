import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';


class PostsPage extends Component {
    constructor(props){
      super(props)
      this.state = {
        posts: dummyData,
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
   }
  
   render(){
    return (
      <div className="post-container">
      <SearchBar />
        {this.state.posts.map((post, index) => (
          <PostContainer
            key={index}
            postIndex={index}
            comments={post.comments}
            post={post}
            incrementLikes={this.incrementLikes}
          />
        ))}
     </div>
    )
  }
  }
  


export default PostsPage;