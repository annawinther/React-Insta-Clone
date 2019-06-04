import React from 'react';
import pt from 'prop-types';

const Comments = ({ username, text }) => {
    return (
        <div>
            <p><span>{username}</span> {text}</p>
           
        </div>
    );
};


Comments.propTypes = {
        text: pt.string,
        username: pt.string,
}


export default Comments