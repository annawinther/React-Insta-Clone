import React from 'react';
import pt from 'prop-types';

const Comments = ({ username, text }) => {
    return (
        <div>
            <h6>{username}</h6>
            <p>{text}</p>
        </div>
    );
};


Comments.propTypes = {
        text: pt.string,
        username: pt.string,
}


export default Comments