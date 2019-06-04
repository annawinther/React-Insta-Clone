import React, { Component } from 'react';
import Comments from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/CommentSection/Comments.js';
import pt from 'prop-types';
import Like from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/CommentSection/img/likes.png';
// import dummyData from '../../dummy-data';
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
            // dummyData: dummyData,
            newComment: '',
        }
    }

    changeHandler = (event) =>{
        this.setState({
            newComment: event.target.value,
        })
        console.log("typing in comment")
    }
  
    addNewComment = (event) => {
        event.preventDefault();
        
        const newComment = [{
            username: 'annabanana' ,
            text: this.state.newComment,
          }];
        console.log(`this is the new comment`);
         
            this.setState({
                comments: this.state.comments.concat(newComment),
                newComment: '',
            }); 
         } 

    render() {
        return (
            <div>
                <div> 
                <img src={Like} alt="likes"/>
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