import React from 'react';
import { Link } from 'react-router-dom';
import EmailForm from './EmailForm';

const Contact = (props) => {
    return (
        <section className="main-content-section" id="contact-section">
            <h2 className="main-content-section-header">Contact</h2>
            <div className="main-content-section-body">
                <EmailForm />
                <Link to="mailto:claire.hw.cho@gmail.com" className="link">
                    <i className="bi bi-envelope-at"></i>
                </Link>
                <Link to="https://github.com/clairehwcho" target="_blank" className="link">
                    <i className="bi bi-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/hyungwoncho/" target="_blank" className="link">
                    <i className="bi bi-linkedin"></i>
                </Link>
            </div >
        </ section>
    );
};

export default Contact;