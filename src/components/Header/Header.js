import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h2>Welcome to react website</h2>
            <nav className='fw-bold fs-3'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;