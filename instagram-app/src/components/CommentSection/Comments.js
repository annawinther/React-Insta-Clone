import React from 'react';
import pt from 'prop-types';
import styled from 'styled-components';

const Username = styled.span`
    font-weight: bold;
`;

const Comments = ({ username, text }) => {
    return (
        <div className="comments">
            <p><Username>{username}</Username> {text}</p>
        </div>
    );
};

Comments.propTypes = {
        text: pt.string,
        username: pt.string,
}


export default Comments