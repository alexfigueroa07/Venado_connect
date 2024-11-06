import React, { useState } from 'react';
import '../componentsStyles/Chats.css';

function Chats() {
    const [chats] = useState([
        { username: 'Juanelo', lastMessage: 'Adan te ama', online: true },
        { username: 'Leonardinio', lastMessage: 'esta bien facil we', online: false },
        { username: 'Noemy y oswis', lastMessage: 'SOMOS AMIGOS :P ', online: true },
        { username: 'El mas feo del grupo', lastMessage: 'QUIEN SOY?', online: false },
        { username: 'Tu gfa', lastMessage: 'YA LLEGASTE???', online: true },
        { username: 'Oswis', lastMessage: 'Conozco tu secretoooo', online: true },
    ]);

    return (
        <div className="chats-container">
            <h3>Chats</h3>
            <input type="text" placeholder="Search chats..." className="chat-search" />
            <div className="chat-list">
                {chats.map((chat, index) => (
                    <div key={index} className="chat-item">
                        <div className="chat-info">
                            <span className="chat-username">{chat.username}</span>
                            <span className="chat-message">{chat.lastMessage}</span>
                        </div>
                        <div className="chat-status">
                            <div
                                className="status-dot"
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: chat.online ? 'rgb(0, 255, 0)' : 'rgb(5, 5, 122)',
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chats;
