import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioImg from '../../../../assets/img/portfolio/roadtrip-weather-planner.png'

const RoadtripWeatherPlanner = (props) => {
    return (
        <div className="portfolio-card" id="roadtrip-weather-planner-portfolio-card">
            <div className="portfolio-card-header">
                <h5 className="portfolio-title">
                    Roadtrip Weather Planner
                </h5>
                <h6 className="portfolio-link">
                    <Link
                        to="https://github.com/clairehwcho/road-trip-weather-planner"
                        target="_blank"
                        className="link">
                        GitHub
                    </Link>
                    <span>|</span>
                    <Link
                        to="https://clairehwcho.github.io/road-trip-weather-planner/"
                        target="_blank"
                        className="link">
                        Deployed App
                    </Link>
                </h6>
            </div>
            <div className="portfolio-card-body">
                <p className="portfolio-description">
                    A group project to provide the weather forecast for cities you are travelling to by
                    fetching city coordinates and weather conditions data from third-party APIs.
                </p>
                <ul className="portfolio-tech-list">
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        Materialize
                    </li>
                    <li>
                        Third-party APIs
                    </li>
                    <li>
                        GitHub Pages
                    </li>
                </ul>
                <div className="portfolio-img">
                    <img src={PortfolioImg} alt="roadtrip-weather-planner" />
                </div>
            </div>
        </div >
    );
};

export default RoadtripWeatherPlanner;