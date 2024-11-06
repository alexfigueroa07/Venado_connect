import React from 'react';

function PostCard({ post }) {
    return (
        <div className="post-card">
            <h3>{post.author} Posted:</h3>
            <p>{post.content}</p>
        </div>
    );
}
export default PostCard;
