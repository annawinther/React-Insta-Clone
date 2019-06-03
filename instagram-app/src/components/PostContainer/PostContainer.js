import React from 'react';
import Post from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/PostContainer/Post.js';

const PostContainer = props => {
    return (
        <div>
            {props.posts.map(p => 
                <Post 
                key={p.imageUrl}
                post={p}
                />
                )}
        </div>
    )
}

export default PostContainer;