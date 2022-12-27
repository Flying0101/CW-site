import React from 'react';

import '../css/Landing.css';

import landingPic from '../images/frontpage.jpg';


function Landing() {


 

    return (
        <section className="landing-section">
            <img src={landingPic} className="main-pic" />

            <div className="landing-container">
                <h1 className="l-slogan">HELLOO HELLO HELOEO LITTLE SMURF</h1>
                <p className="l-pre-info">A product landing page is a standalone web page created specifically for <br /> the purpose of selling a product.</p>
                <button className="landing-cta">LEARN MORE</button>
            </div>
        </section>
    )

}

export default Landing