import React, { Component } from 'react';
import Comments from './Comments.js';
import pt from 'prop-types';
import Like from './img/likes.png';
import styled from 'styled-components';

const CommentStyle = styled.div`
    text-align: left;
    padding-top: 10px;
    padding-left: 25%;
    margin: 0 auto;

`;

// const LikesStyle = styled.div`
//     display: flex;
//     flex-direction: row;
//     border: 1px solid red;
// `;

class CommentSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: props.comments,
            newComment: '',
            incrementLikes: props.incrementLikes,
            postIndex: props.postIndex,
        }
    }

    changeHandler = (event) =>{
        this.setState({
            newComment: event.target.value,
        })
    }
  
    addNewComment = (event) => {
        event.preventDefault();
        
        const newComment = [{
            username: localStorage.getItem("user") ,
            text: this.state.newComment,
          }];
         
            this.setState({
                comments: this.state.comments.concat(newComment),
                newComment: '',
            }); 
     } 


    render() {
        return (
            <CommentStyle>
                <div> 
                <img 
                    onClick={(event) => this.state.incrementLikes(event, this.state.postIndex)} 
                    src={Like} 
                    alt="likes"
                    width={30}
                />
                {this.props.likes} likes
                </div>
                {this.state.comments.map((comment, index) => (
                        <Comments 
                        key={index}
                        username={comment.username}
                        text={comment.text}
                        />
                        )
                    )}
    
                <form onSubmit={(event) => this.addNewComment(event, this.state.newComment)}>
                    <input onChange={this.changeHandler}
                        type="text"
                        placeholder="Add a comment..."
                        value={this.state.newComment}
                        
                    />
                </form>
    
            </CommentStyle>
          
        )
    }
}


CommentSection.propTypes = {
    comments: pt.arrayOf(
        pt.shape({ 
            text: pt.string,
            username: pt.string
        })
    )
}
   
export default CommentSection;