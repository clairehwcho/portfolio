import React from 'react';
import BargainBinElectronics from './PortfolioCards/BargainBinElectronics';
import RoadtripWeatherPlanner from './PortfolioCards/RoadtripWeatherPlanner';

const Portfolio = (props) => {
    return (
        <section className="main-content-section" id="portfolio-section">
            <h2 className="main-content-section-header">Portfolio</h2>
            <div className="main-content-section-body">
                <BargainBinElectronics />
                <RoadtripWeatherPlanner />
            </div >
        </section>
    );
};

export default Portfolio;