import React from "react";
import jumping from "./imgs/jumping.gif"

const Home = () => {
    return (
        <div className="home-container">
            <p>
                Hello! 
                My name is Max Villagomez.
                Aspiring Web Developer with Fullstack experience.
            </p>
            <div className="gif-container">
                <img className="jumping-gif" src={jumping}/>
            </div>
        </div>
    )
}

export default Home;