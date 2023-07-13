import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = (props) => {

    return (
        <div className="portfolio-card-column">
            <div className="portfolio-card">
                <div className="portfolio-card-header">
                    <h5 className="portfolio-title">
                        {props.title}
                    </h5>
                    <h6 className="portfolio-link">
                        <Link
                            to={props.githubURL}
                            target="_blank"
                            className="link">
                            GitHub
                        </Link>
                        <span>|</span>
                        <Link
                            to={props.deployedURL}
                            target="_blank"
                            className="link">
                            Deployed App
                        </Link>
                    </h6>
                </div>
                <div className="portfolio-card-body">
                    <p className="portfolio-description">
                        {props.desc}
                    </p>
                    <ul className="portfolio-tech-list">
                        {props.tech.map((tech, i) => {
                            return (
                                <li key={i}>{tech}</li>
                            )
                        })}
                    </ul>
                    <div className="portfolio-img">
                        <img src={require(`../../assets/img/portfolio/${props.imageName}`)} alt={props.title} />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default PortfolioCard;