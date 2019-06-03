import React, { Component } from 'react';
import Comments from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/CommentSection/Comments.js';

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render(){
        return(
            <div>
                {this.state.comments.map((c, i) => 
                    <Comments 
                        key={i}
                        comment={c}
                    />
                    )}
            </div>
        )
    }
}
   
export default CommentSection;