import React from 'react';
import pt from 'prop-types';
import styled from 'styled-components';

const PostStyle = styled.div`
    margin-top: 20px;
    
    img {
       width: 50%;

    }
`;
const UserinfoStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    width: 20%;
    padding-left: 23%;
    text-align: center;

    img {
        margin: 20px;
        border-radius: 100%;
        width: 40px;
    }
    h4 {
        padding-top: 7px;
    }

`;


const Post = ({ thumbnailUrl, username, postImageUrl }) => {
    return (
        <PostStyle>
            <UserinfoStyle>
                <div>
                    <img
                        src={thumbnailUrl}
                        alt="User Img" 
                    />
                </div>
                <h4>{username}</h4>
            </UserinfoStyle>

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