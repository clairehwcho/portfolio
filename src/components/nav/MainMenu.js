import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const tbu = () => {
        alert("Will be uploaded soon!");
    };

    return (
        <nav id="header-nav">
            <ul id="header-nav-ul">
                <li>
                    <Link to="/" className="link">About me</Link>
                </li>
                <li>
                    <Link to="/projects" className="link">Projects</Link>
                </li>
                <li>
                    <Link to="/contact" className="link">Contact</Link>
                </li>
                <li>
                    <Link to="https://docs.google.com/document/d/1Ky77JxGOYP1ZG8Q88lR58itz5aNDa3eJSByYPFZ4yE0/edit" target="_blank" className="link">Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;