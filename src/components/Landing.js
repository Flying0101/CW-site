import React from 'react';

import '../css/Landing.css';

import landingPic from '../images/frontpage.jpg';


function Landing() {




    return (
        <section className="landing-section">
            <img alt="dark laptop" src={landingPic} className="main-pic" />

            <div className="landing-container">

                <h1 className="l-slogan">Kraftfull copy<br /> kraftfulla resultat</h1>

                <p className="l-pre-info">Vi hjälper företag att konvertera bättre genom bättre copy, <br/>omvandla ord till försäljning!  </p>
                <button className="landing-cta">Läs mer </button>
            </div>
        </section>
    )

}

export default Landing