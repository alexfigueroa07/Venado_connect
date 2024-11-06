import React, { useState } from 'react';
import Chats from '../components/Chats';
import NewPost from '../components/NewPost';
import PostCard from '../components/PostCard';

import '../componentsStyles/Home.css'



function Home() {
    /* Aqui declaramos las constantes y las funciones a utilizar */

    const [posts, setPosts] = useState([]);
    const [showNewPost, setShowNewPost] = useState(false);

    const addNewPost = (newPostContent) => {
        const newPost = {
            id: posts.length + 1,
            author: 'New User',
            content: newPostContent,
        };

        setPosts([...posts, newPost]);
        setShowNewPost(false)
    }

    const handleCreatePost = () => {
        setShowNewPost(true)
    }


    return (

        <div>
            <div className="home-container">
                <div className='home-sidebar'>
                    {/* Aqui integramos el componente de chats... */}
                    <Chats />
                </div>

                {/* Estructura general del home */}
                <div className='home-main-content'>
                    <h1>Bienvenidos a Venados Connect </h1>
                    <p>Venado connect es una red social para los alumnos de la UTC para informacion academica </p>
                    <div className='home-main'>
                        {/* Aqui anaderemos el componente para mostrar post y crear pos con uso del state */}
                        <div className='home-left'>

                            {showNewPost ? (
                                <NewPost addPost={addNewPost} /> // Pasa la función addNewPost como prop a NewPost
                            ) : (
                                <>
                                    {/* Solo mostrar el componente PostCard si hay posts creados */}
                                    {posts.length > 0 ? (
                                        posts.map((post) => <PostCard key={post.id} post={post} />)
                                    ) : (
                                        <p>No tienes post bebe, crear uno aqui...</p>
                                    )}
                                    <button onClick={handleCreatePost}>Crear un nuevo Post</button>
                                </>
                            )}


                        </div>
                        <div className='home-right'>
                            <iframe
                                width="868"
                                height="488"
                                src="https://www.youtube.com/embed/wYBk8eecxA0"
                                title="💚TE QUIERO EN CALVILLO"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen>

                            </iframe>

                        </div>
                    </div>
                </div>
            </div>
            <footer className='home-footer'>
                <p>$copy; 2024 Venado UTC</p>
            </footer>
        </div>

    );
}

export default Home;
