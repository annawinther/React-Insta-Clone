import React from 'react';
// import pt from 'prop-types';
// import PostHeader from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/PostContainer/PostHeader.js'

const Post = ({ thumbnailUrl, username, postImageUrl}) => {
    return (
        <div>
            <div>
                <div>
                    <img
                        src={thumbnailUrl}
                        alt="User Img"
                        width={32}
                        heigth={32}
                    />
                </div>
                <h4>{username}</h4>
            </div>

            <div>
                <img src={postImageUrl} alt="post" />
            </div>
        </div>
        )
}


export default Post;