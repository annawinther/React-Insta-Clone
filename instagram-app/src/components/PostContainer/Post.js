import React from 'react';
import pt from 'prop-types';
import './Post.css';
// import PostHeader from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/PostContainer/PostHeader.js'

const Post = ({ thumbnailUrl, username, postImageUrl }) => {
    return (
        <div className="post">
            <div className="post-info">
                <div>
                    <img
                        src={thumbnailUrl}
                        alt="User Img"
                    />
                </div>
                <h4>{username}</h4>
            </div>

            <div className="post-img">
                <img src={postImageUrl} alt="post" />
            </div>
        </div>
        )
}

Post.propTypes = {
    thumbnailUrl: pt.string.isRequired,
    username: pt.string.isRequired,
    postImageUrl: pt.string.isRequired,
}

export default Post;