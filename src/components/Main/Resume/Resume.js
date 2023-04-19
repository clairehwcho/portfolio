import React from 'react';
import { Link } from 'react-router-dom';

const Resume = (props) => {
    const tbu = () => {
        alert("Will be uploaded soon!");
    };

    return (
        <section className="main-content-section" id="resume-section">
            <h2 className="main-content-section-header">Resume</h2>
            <div className="main-content-section-body">
                <p>Download my resume: <Link to="" onClick={tbu} className="link"><span id="resume-download-btn">resume.pdf <i class="bi bi-download"></i></span></Link></p>
                <p>Technologies that I can use:</p>
                <ul>
                    <li>
                        Languages:
                        <span> Python, Java, JavaScript (ES6, Node.js), HTML5, CSS, SQL</span>
                    </li>
                    <li>
                        Frameworks/Libraries:
                        <span> Express, Flask, Jinja2, Spring Boot, jQuery, React, Bootstrap, Materialize</span>
                    </li>
                    <li>
                        Databases:
                        <span> MySQL, MongoDB</span>
                    </li>
                    <li>Tools:
                        <span> Visual Studio Code, AJAX, Spring Tool Suite, MySQL Workbench, Postman, Insomnia, AWS(EC2), Git, Github, Adobe Premiere Pro, Adobe Photoshop, Adobe Illustrator</span>
                    </li>
                </ul>
            </div >
        </ section>
    );
};

export default Resume;