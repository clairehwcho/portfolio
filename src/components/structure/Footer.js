import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer>
            <div className="footer-row">
                <Link to="/contact" className="link">
                    <i className="bi bi-envelope-at"></i>
                </Link>
                <Link to="https://github.com/clairehwcho" target="_blank" className="link">
                    <i className="bi bi-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/hyungwoncho/" target="_blank" className="link">
                    <i className="bi bi-linkedin"></i>
                </Link>
            </div>
            <div className="footer-row">
                Made with ❤️ by Claire
            </div>
        </ footer>
    );
};

export default Footer;