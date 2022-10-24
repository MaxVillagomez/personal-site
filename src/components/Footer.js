import React from "react";
import linkedinLogo from './imgs/linkedin-icon-18-256.png'

const Footer = () => {
    return (
        <a href="https://www.linkedin.com/in/max-villagomez/" target="_blank">
            <div className="footer-container">
            <img className="linkedin-logo" src={linkedinLogo}/>
        </div>
        </a>
    )
}

export default Footer