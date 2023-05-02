import React from 'react';
import portfolioData from './portfolioData.json';
import PortfolioCard from '../../components/cards/PortfolioCard';
import PortfolioPlaceholderCard from '../../components/cards/PortfolioPlaceholderCard';

const Portfolio = (props) => {
    return (
        <section className="main-content-section" id="portfolio-section">
            <h2 className="main-content-section-header">Portfolio</h2>
            <div className="main-content-section-body">
                {portfolioData.map((project, i) => {
                    return (
                        <PortfolioCard
                            key={i}
                            title={project.title}
                            githubURL={project.githubURL}
                            deployedURL={project.deployedURL}
                            desc={project.desc}
                            tech={project.tech}
                            imageName={project.imageName}
                        />
                    )
                })}
                <PortfolioPlaceholderCard />
            </div >
        </section>
    );
};

export default Portfolio;