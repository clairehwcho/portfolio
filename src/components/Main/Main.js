import Intro from './Content/Intro';
import AboutMe from './Content/AboutMe';
import React from 'react';

const Main = (props) => {
    return (
        <div id="main">
            <hr />
            <Intro />
            <hr />
            <AboutMe />
        </div>
    );
};

export default Main;