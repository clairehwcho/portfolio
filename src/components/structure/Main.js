import { Routes, Route } from 'react-router-dom';
import React from 'react';

import AboutMe from '../../pages/AboutMe';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import Resume from '../../pages/Resume';

const Main = (props) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </main>
    );
};

export default Main;