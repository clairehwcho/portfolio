import React from 'react';

const AboutMe = (props) => {
    return (
        <div className="main-content-section" id="about-me-section">
            <h2 className="main-content-section-header">About Me</h2>
            <div className="main-content-section-body">
                <p>Hi! My name is Hyung Won, but you can also call me Claire. I am currently looking for full stack developer position.</p>
                <p>My past work experiences of client-facing jobs as a conference coordinator and a community manager at coworking space company have led me to become both a problem-solver and a multi-tasker, who can quickly adapt to dynamically-changing environments.</p>
                <p>Here are the technologies that I can use:</p>
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
            </div>
        </div >
    );
};

export default AboutMe;