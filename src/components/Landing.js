import React from 'react';

import '../css/Landing.css';

import landingPic from '../images/frontpage.jpg';


function Landing() {


  

    return (
        <section className="landing-section">
            <img alt="dark laptop" src={landingPic} className="main-pic" />

            <div className="landing-container">
                <h1 className="l-slogan">Looksy, the place to find gifts</h1>
                <p className="l-pre-info"><br /> Celebrate the spirit of giving with us, <br/> together we can suprise your loved ones!</p>
                <button className="landing-cta">EXPLORE MORE</button>
            </div>
        </section>
    )

}

export default Landing