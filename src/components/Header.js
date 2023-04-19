import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const tbu = () => {
        alert("Will be updated soon!");
    };

    return (
        <div id="header">
            <div id="logo">
                <Link to="/" className="link">
                    <h1>
                        HYUNG WON <span>CHO</span>
                    </h1>
                </Link>
            </div>

            <nav id="header-nav">
                <ul id="header-nav-ul">
                    <li>
                        <Link to="#about-me" className="link">About me</Link>
                    </li>
                    <li>
                        <Link to="#work" className="link">Work</Link>
                    </li>
                    <li>
                        <Link to="#contact-me" className="link">Contact me</Link>
                    </li>
                    <li>
                        <Link to="#" className="link" onClick={tbu}>Resume</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;