import React from 'react';
import { Link } from 'react-router-dom';
import WorkImg from '../../../../../assets/img/work/roadtrip-weather-planner.png'

const RoadtripWeatherPlanner = (props) => {
    return (
        <div className="work-card" id="roadtrip-weather-planner-work-card">
            <div className="work-card-header">
                <h5 className="work-title">
                    Roadtrip Weather Planner
                </h5>
                <h6 className="work-link">
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
            <div className="work-card-body">
                <p className="work-description">
                    A group project to provide the weather forecast for cities you are travelling to by
                    fetching city coordinates and weather conditions data from third-party APIs.
                </p>
                <ul className="work-tech-list">
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
                <div className="work-img">
                    <img src={WorkImg} alt="roadtrip-weather-planner" />
                </div>
            </div>
        </div >
    );
};

export default RoadtripWeatherPlanner;