import { Routes, Route } from 'react-router-dom';
import React from 'react';

import AboutMe from '../../pages/AboutMe';
import Portfolio from '../../pages/Portfolio';
import Contact from '../../pages/Contact';
import Resume from '../../pages/Resume';

const Main = (props) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </main>
    );
};

export default Main;