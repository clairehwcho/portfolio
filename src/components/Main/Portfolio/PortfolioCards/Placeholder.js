import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioImg from '../../../../assets/img/portfolio/portfolio-placeholder.jpg'

const Placeholder = (props) => {
    return (
        <div className="portfolio-card" id="bargain-bin-electronics-portfolio-card">
            <div className="portfolio-card-header">
                <h5 className="portfolio-title">
                    Upcoming Project
                </h5>
                {/* <h6 className="portfolio-link">
                    <Link
                        to="https://github.com/clairehwcho/<repo-name>"
                        target="_blank"
                        className="link">
                        GitHub
                    </Link>
                    <span>|</span>
                    <Link
                        to=""
                        target="_blank"
                        className="link">
                        Deployed App
                    </Link>
                </h6> */}
            </div>
            <div className="portfolio-card-body">
                <p className="portfolio-description">
                    More projects are coming!
                </p>
                {/* <ul className="portfolio-tech-list">
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                </ul> */}
                <div className="portfolio-img">
                    <img src={PortfolioImg} alt="bargain-bin-electronics" />
                </div>
            </div>
        </div >
    );
};

export default Placeholder;