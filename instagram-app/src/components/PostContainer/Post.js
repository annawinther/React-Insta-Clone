import React from 'react';
import pt from 'prop-types';
// import './Post.css';
import styled from 'styled-components';

const PostStyle = styled.div`
    border: 1px solid grey;
    padding: none;
`;

const ThumbnaailStyle = styled.img`
    border-radius: 30px;
    size: 40px;
    width: 50px;
`;



const Post = ({ thumbnailUrl, username, postImageUrl }) => {
    return (
        <PostStyle className="post">
            <div className="post-info">
                <div>
                    <ThumbnaailStyle
                        src={thumbnailUrl}
                        alt="User Img" 
                    />
                </div>
                <h4>{username}</h4>
            </div>

            <div className="post-img">
                <img 
                    src={postImageUrl} 
                    alt="post" 
                />
            </div>
        </PostStyle>
        )
}

Post.propTypes = {
    thumbnailUrl: pt.string.isRequired,
    username: pt.string.isRequired,
    postImageUrl: pt.string.isRequired,
}

export default Post;