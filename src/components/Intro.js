import React from 'react';

import '../css/Services.css';

import Lottie from "lottie-react";

import copyAnimation from '../lotties/copy-animation.json';


function Intro() { 




    return (
        <section className="intro-section-grid">

            <div className="intro-grid-div">
                <Lottie animationData={copyAnimation} className="intro-anim" />
            </div>

            <div className="intro-grid-div">
                <div>
                    <h1 className="intro-header">This is copywriting</h1>
                    <h1 className="intro-info">with copy you can increase your fking sales so you can buy a lambo some fking day and stop being the boring tweeb you are, with good copy your revenue will shine, but good copy costs. hopefully you understand this and buy my service so i too can buy a fking lambo some day. </h1>
                </div>
            </div>


        </section>
    )

}

export default Intro