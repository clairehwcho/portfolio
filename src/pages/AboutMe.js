import React from "react";
import { Link } from "react-router-dom";
import coder from "../assets/img/profile/coder.png";
import { TypeAnimation } from "react-type-animation";

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
                                ``,
                                `I'm a full-stack developer.`,
                                3000,
                                ``,
                                `I'm a front-end developer.`,
                                3000,
                                ``,
                                `I'm a back-end developer.`,
                                3000,
                                ``
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
                    <p>Hi! My name is Hyung Won, but you can also call me Claire. I am a full-stack developer who can get a project done from start to finish.</p>
                    <p>With extensive experience as a Community Program Manager and Conference Project Manager in the hospitality industry, I successfully led customer-centric initiatives. Combining my background in hospitality with robust coding skills acquired through coding bootcamps, I am ready to thrive as a full-stack software engineer, bringing a distinct blend of customer-centricity and technical proficiency to make impactful contributions in this dynamic field of software engineering!</p>
                    <p>Here are the technologies that I can use:</p>
                    <ul className="tech-ul">
                        <li>
                            Languages:
                            <span> JavaScript (ES6, Node.js), Python, Java, HTML5, CSS, SQL, GraphQL</span>
                        </li>
                        <li>
                            Frameworks/Libraries:
                            <span> React.js, Express.js, jQuery, Flask, Django, Jinja2, Spring Boot, Bootstrap, Materialize, Material UI</span>
                        </li>
                        <li>
                            Databases:
                            <span> MySQL, MongoDB</span>
                        </li>
                        <li>Tools:
                            <span> Visual Studio Code, AJAX, Spring Tool Suite, MySQL Workbench, Postman, Insomnia, AWS(EC2), Git, GitHub, Adobe Premiere Pro, Adobe Photoshop, Adobe Illustrator, Microsoft Office Suite</span>
                        </li>
                    </ul>
                    <p>Check my <Link to="/projects" className="link"><span className="about-me-link">projects</span></Link> and <Link to="https://docs.google.com/document/d/1Ky77JxGOYP1ZG8Q88lR58itz5aNDa3eJSByYPFZ4yE0/edit" target="_blank" className="link"><span className="about-me-link">resume</span></Link> to learn more about me!</p>
                </div>
            </div>
        </section >
    );
};

export default AboutMe;