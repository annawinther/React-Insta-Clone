import React from 'react';
import pt from 'prop-types';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

const PostStyle = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid #efefef;
    width: 80%;
    background-color: white;
`;

const PostContainer = ({ post, comments, incrementLikes, postIndex}) => {
    return (
        <PostStyle>
            <Post
            thumbnailUrl={post.thumbnailUrl}
            username={post.username}
            postImageUrl={post.imageUrl} 
            />
            <CommentSection
            comments={comments}
            postIndex={postIndex}
            postTime={post.timestamp}
            likes={post.likes}
            incrementLikes={incrementLikes}
            />
        </PostStyle>
    )
}

PostContainer.propTypes = {
    post: pt.shape({
        comments: pt.array,
        imageUrl: pt.string.isRequired,
        likes: pt.number,
        thumbnailUrl: pt.string.isRequired,
        timestamp: pt.string,
        username: pt.string.isRequired,
    }
    )
}

export default PostContainer;
