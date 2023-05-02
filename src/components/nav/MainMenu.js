import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav id="header-nav">
            <ul id="header-nav-ul">
                <li>
                    <Link to="/" className="link">About me</Link>
                </li>
                <li>
                    <Link to="/portfolio" className="link">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact" className="link">Contact</Link>
                </li>
                <li>
                    <Link to="/resume" className="link">Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;