import React from "react";
import selfie from "./imgs/selfie.PNG"

const About = () => {
    return (
        <div className='about-container'>
            <div>
                <img className="selfie" src={selfie}></img>
            </div>
            <div>
                <p>My name is Max Villagomez, and I am an aspiring Full-Stack Web Developer.</p>
                <p>I have a background in English and Education, but I recently decided I wanted to switch up my career.</p>
                <p>I started my journey to becoming a web developer with Fullstack Stack Academy in June of 2022.</p>
            </div>
        </div>
    )
}

export default About;