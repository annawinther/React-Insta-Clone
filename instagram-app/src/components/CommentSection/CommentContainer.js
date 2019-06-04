import React from 'react';
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

const CommentSection = ({ likes, postTime, comments}) => {
    return (
        <div>
            <div>{likes} likes</div>
                {comments.map((comment, index) => (
                    <Comments 
                    key={index}
                    username={comment.username}
                    text={comment.text}
                    />
                    )
                )}

            <div>
                <input
                    type="text"
                    placeholder="Add a comment"
                />
            </div>

            </div>
      
    )
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