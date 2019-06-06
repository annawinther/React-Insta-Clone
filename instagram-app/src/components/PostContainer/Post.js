import React from 'react';
import pt from 'prop-types';
// import './Post.css';
import styled from 'styled-components';

const PostStyle = styled.div`
    border: 1px solid grey;
    margin-top: 20px;
    /* width: 90%; */
    
    img {
       width: 50%;

    }
`;
const UserinfoStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    /* border: 1px solid red; */
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

// const ThumbnaailStyle = styled.img`
//     border-radius: 100%;
//     size: 40px;
//     width: 50px;
// `;



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