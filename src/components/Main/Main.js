import React from 'react';
import Intro from './Content/Intro';
import AboutMe from './Content/AboutMe';
import Work from './Content/Work/Work';

const Main = (props) => {
    return (
        <div id="main">
            <Intro />
            <hr />
            <AboutMe />
            <hr />
            <Work />
        </div>
    );
};

export default Main;