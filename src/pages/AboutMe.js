import React from 'react';
import { Link } from 'react-router-dom';
import coder from '../assets/img/profile/coder.png';
import { TypeAnimation } from 'react-type-animation';

const AboutMe = (props) => {
    const tbu = () => {
        alert("Will be uploaded soon!");
    };

    return (
        <section className="main-content-section" id="about-me-section">
            <h2 className="main-content-section-header">About Me</h2>
            <div className="main-content-section-body">
                <div className="main-content-section-body-row">
                    <div id="intro-img">
                        <img src={coder} alt="Woman Coding" />
                    </div>
                    <div id="intro-content">
                        <p id="intro-greeting">HELLO WORLD</p>
                        <p id="intro-name">I'm Claire.</p>
                        <TypeAnimation
                            sequence={[
                                `I'm a full stack developer.`,
                                5000,
                                '',
                            ]}
                            wrapper="p"
                            speed={40}
                            repeat={Infinity}
                            cursor={true}
                            className={'intro-position'}
                            style={{ color: 'var(--yellow)' }}
                        />
                    </div>
                </div>

                <div className="main-content-section-body-row">
                    <p>Hi! My name is Hyung Won, but you can also call me Claire. I am a full stack developer who can get a project done from start to finish.</p>
                    <p>My previous work experiences as a conference coordinator and a coworking space manager have led me to become both a problem-solver and a multi-tasker with a customer-oriented mindset.</p>
                    <p>Here are the technologies that I can use:</p>
                    <ul className="tech-ul">
                        <li>
                            Languages:
                            <span> Python, Java, JavaScript (ES6, Node.js), HTML5, CSS, SQL</span>
                        </li>
                        <li>
                            Frameworks/Libraries:
                            <span> Express, Flask, Jinja2, Spring Boot, jQuery, React, Bootstrap, Materialize, Material UI</span>
                        </li>
                        <li>
                            Databases:
                            <span> MySQL, MongoDB</span>
                        </li>
                        <li>Tools:
                            <span> Visual Studio Code, AJAX, Spring Tool Suite, MySQL Workbench, Postman, Insomnia, AWS(EC2), Git, Github, Adobe Premiere Pro, Adobe Photoshop, Adobe Illustrator</span>
                        </li>
                    </ul>
                    <p>Check my <Link to="/projects" className="link"><span className="about-me-link">projects</span></Link> and <Link to="" onClick={tbu} className="link"><span className="about-me-link">resume</span></Link> to learn more about me!</p>
                </div>
            </div>
        </section >
    );
};

export default AboutMe;