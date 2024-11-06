import React, { useState } from 'react';
import '../componentsStyles/NewPost.css';

function NewPost({ addPost }) { //Este recibe props

    const [postContent, setPostContent] = useState('');

    const handlePostChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postContent.trim()) {
            addPost(postContent);
        }
    };

    return (
        <div className="new-post-container">
            <h2>Crear un nuevo Post</h2>
            <textarea
                value={postContent}
                onChange={handlePostChange}
                placeholder="Escribe lo que gustesa aqui..."
                rows="5"
            />
            <button onClick={handleSubmit}>Publicar</button>
        </div>
    );
}
export default NewPost;
