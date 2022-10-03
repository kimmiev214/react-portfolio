import React from "react";
import "./index.scss";
import portfolioData from "../../data/portfolio.json";


const Portfolio = () => {
    console.log(portfolioData);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                src = {port.cover}
                                className="portfolio-image"
                                alt={"portfolio"} />
                                <div className="content">
                                    <p className="title">
                                        {port.title}</p>
                                        <h3 className="description">{port.description}</h3>
                                        <p><i className="arrow right" onClick={() => window.open(port.url)}>GO</i></p>
                                        </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            <div className="container portfolio-page">
                <div className = "text-zone">
                <h2>Portfolio</h2>
                </div>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
        </>
    )
}

export default Portfolio