import React from 'react';
import pt from 'prop-types';
import './Comment.css';

const Comments = ({ username, text }) => {
    return (
        <div className="comments">
            <p><span>{username}</span> {text}</p>
           
        </div>
    );
};


Comments.propTypes = {
        text: pt.string,
        username: pt.string,
}


export default Comments