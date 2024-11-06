import React from 'react';
import { Link } from 'react-router-dom';
import '../componentsStyles/NavBar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">VenadoConnect</h1>
            <ul className="navbar-links">
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li >
                    <Link to="/Profile">Profile</Link>
                </li>
                <li >
                    <Link to="/Post">Feed</Link>
                </li>
                <li >
                    <Link to="/Events">Eventos</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
