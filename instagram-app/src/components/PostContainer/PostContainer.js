import React from 'react';
import pt from 'prop-types';
import Post from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/PostContainer/Post.js';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = ({ post, comments, incrementLikes, postIndex}) => {
    return (
        <div>
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
        </div>
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
