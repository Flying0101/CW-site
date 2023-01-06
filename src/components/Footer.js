import React from 'react';

import '../css/Footer.css';


function Footer() {




    return (
        <footer className="footer-section">
            <div className="f-contact-container">
                <div className="f-c-div">
                    <h2 className="f-c-header">start converting better</h2>
                    <p className="f-c-inf">start or why not improve your copywriting! </p>
                </div>

                <button className="f-c-btn">Contact us</button>
            </div>

            <div className="f-links-container">
                <div className="f-l-div">
                    <h3 className="f-l-header">About us</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">we love lambos thats why we sell this service to afford a lambo lets goo</li>
                    </ul>
                </div>
                <div className="f-l-div">
                    <h3 className="f-l-header">About us</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">we love lambos thats why we sell this service to afford a lambo lets goo</li>
                    </ul>
                </div>
                <div className="f-l-div">
                    <h3 className="f-l-header">About us</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">we love lambos thats why we sell this service to afford a lambo lets goo</li>
                    </ul>
                </div>
            </div>

            <div className="f-bottom-container">
                <div className="f-b-wraper">
                    <p className="f-b-text">2023 Terms privacy</p>
                    <button className="f-b-btn">BACK TO TOP</button>
                </div>
            </div>
        </footer>
    )

}

export default Footer