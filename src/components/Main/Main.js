import Intro from './Content/Intro';
import AboutMe from './Content/AboutMe';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
    return (
        <main>
            <Intro />
            <hr/>
            <AboutMe />
        </main>
    );
};

export default Main;