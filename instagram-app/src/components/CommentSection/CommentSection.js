import React, { Component } from 'react';
import Comments from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/CommentSection/Comments.js';
import pt from 'prop-types';
// import CommentInput from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/CommentSection/CommentInput.js';

// class CommentSection extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             comments: props.comments,
//         };
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.comments.map(c => 
//                     <Comments 
//                         key={c.comment}
//                         comment={c.comment}
//                     />
//                     )}
//                 <CommentInput />
//             </div>
//         )
//     }
// }

class CommentSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: props.comments,
            newComments: '',
        }
    }

    changeHandeler = (event) =>{
        this.setState({
            newComments: event.target.value,
        })
        console.log('adding comment')
    }
    addNewComment = (event, index) => {
        event.preventDefault();

        if(this.state.newComment){
            this.setState({
                comments: [ ...this.state.comments, this.state.newComment], 
                newComment: '',
                comment:''
            });  
            } 
    }


    render() {
        return (
            <div>
                <div>{this.props.likes} likes</div>
                    {this.state.comments.map((comment, index) => (
                        <Comments 
                        key={index}
                        username={comment.username}
                        text={comment.text}
                        />
                        )
                    )}
    
                <form onSubmit={this.addNewComment}>
                    <input onChange={this.changeHandeler}
                        type="text"
                        placeholder="Add a comment"
                    />
                </form>
    
                </div>
          
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