import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioImg from '../../../../assets/img/portfolio/bargain-bin-electronics.jpeg'

const BargainBinElectronics = (props) => {
    return (
        <div className="portfolio-card" id="bargain-bin-electronics-portfolio-card">
            <div className="portfolio-card-header">
                <h5 className="portfolio-title">
                    Bargain Bin Electronics
                </h5>
                <h6 className="portfolio-link">
                    <Link
                        to="https://github.com/clairehwcho/bargain-bin-electronics"
                        target="_blank"
                        className="link">
                        GitHub
                    </Link>
                    <span>|</span>
                    <Link
                        to="http://bargain-bin-electronics.herokuapp.com/"
                        target="_blank"
                        className="link">
                        Deployed App
                    </Link>
                </h6>
            </div>
            <div className="portfolio-card-body">
                <p className="portfolio-description">
                    A group project to build an e-commerce marketplace app for buying and selling electronic items.
                </p>
                <ul className="portfolio-tech-list">
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Bootstrap
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        Handlebars.js
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        Sequelize
                    </li>
                    <li>
                        Heroku
                    </li>
                </ul>
                <div className="portfolio-img">
                    <img src={PortfolioImg} alt="bargain-bin-electronics" />
                </div>
            </div>
        </div >
    );
};

export default BargainBinElectronics;