import React from 'react';
import placeholderImg from '../../assets/img/portfolio/portfolio-placeholder.jpg';
import { Link } from 'react-router-dom';

const PortfolioPlaceholderCard = (props) => {

    return (
        <div className="portfolio-card-column">
            <div className="portfolio-card" id="bargain-bin-electronics-portfolio-card">
                <div className="portfolio-card-header">
                    <h5 className="portfolio-title">
                        Upcoming project
                    </h5>
                    <div className="portfolio-card-body">
                        <p className="portfolio-description">
                            More projects are coming!
                        </p>
                        <div className="portfolio-img">
                            <img src={placeholderImg} alt="Upcoming project" />
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default PortfolioPlaceholderCard;