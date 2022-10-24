import React from "react";
import codingCompanions from "./imgs/coding-companions.PNG"

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <p>Click on an image to be directed to deployed version of the project!</p>
            <div className="portfolio-items">
                <div className="coding-companions-container">
                    <a href="https://code-companions.herokuapp.com" target="_blank">
                        <img className="coding-companions-image" src={codingCompanions}/>
                    </a>
                    <p>Grace-Shopper, an e-commerce website.</p>
                </div>
                <div className="coding-companions-container">
                    <p>Project Update Coming Soon</p>
                </div>
                <div className="coding-companions-container">
                    <p>Project Update Coming Soon</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio; 