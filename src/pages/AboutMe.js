import React from 'react';
import { Link } from 'react-router-dom';
import coder from '../assets/img/profile/coder.png';
import { TypeAnimation } from 'react-type-animation';

const AboutMe = (props) => {
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
                    <p>My previous work experiences as a conference coordinator and a coworking space manager have led me to become both a problem-solver and a multi-tasker.</p>
                    <p>Check out my <Link to="/projects" className="link"><span>projects</span></Link> and <Link to="/resume" className="link"><span>resume</span></Link> to learn more about me!</p>
                </div>
            </div>
        </section >
    );
};

export default AboutMe;