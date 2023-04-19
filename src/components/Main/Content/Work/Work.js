import React from 'react';
import BargainBinElectronics from './WorkCards/BargainBinElectronics';
import RoadtripWeatherPlanner from './WorkCards/RoadtripWeatherPlanner';

const Work = (props) => {
    return (
        <div className="main-content-section" id="work-section">
            <h2 className="main-content-section-heading">Work</h2>
            <div className="main-content-section-body">
                <BargainBinElectronics />
                <RoadtripWeatherPlanner />
            </div >
        </div >
    );
};

export default Work;