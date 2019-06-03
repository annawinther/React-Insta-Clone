import React from 'react';


const Comments = props => {
    return (
        <div>
            <span className="comment">{props.comment.text}</span>{' '}
            <span className="user">{props.comment.username}</span>

        </div>
    );
};

export default Comments