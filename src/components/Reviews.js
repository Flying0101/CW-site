import React from 'react';

import '../css/Reviews.css';
import { FaStar } from "react-icons/fa";


function Reviews() {


 

    return (
        <section className="review-section">

            <h1 className="review-header">Customer Reviews</h1>
            <p className="review-info">what our customer says about ous</p>

            <div className="review-container">

                <div className="rev-d">
                    <div className="rev-stars"><FaStar className="star-icons"/> <FaStar className="star-icons"/> <FaStar className="star-icons"/> <FaStar className="star-icons"/> <FaStar className="star-icons"/> </div>
                    <h3 className="rev-quote" >"Amazing short copy"</h3>
                    <p className="rev-feedback" >we needed a copywriter for our startup and with help of SM-consulting we got a great fundament to keep developing on, we will be back in the future be sure of it!</p>
                    <p className="rev-company">- Looksypro <br/> /Ecom</p>
                </div>

            </div>

        </section>
    )

}

export default Reviews