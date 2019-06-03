import React from 'react';
import PostHeader from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/PostContainer/PostHeader.js'

const Post = props => {
    return (
        <div>
            <PostHeader
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div>
                <img
                    alt="post thumbnail"
                    src={props.post.imageUrl}
                />
            </div>
        </div>
    )
}

export default Post;