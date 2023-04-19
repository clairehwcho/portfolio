import React from 'react';
import coder from '../../../assets/img/coder.png'
import { TypeAnimation } from 'react-type-animation';

const Intro = (props) => {
    return (
        <section id="intro-section">
            <div className="intro-section-column">
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
                />
            </div>
            <div className="intro-section-column">
                <img id="intro-img" src={coder} alt="Woman Coding" />
            </div>
        </section >
    );
};

export default Intro;