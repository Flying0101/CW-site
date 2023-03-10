import React from 'react';


import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Methods from '../components/Methods';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

function Home() {




    return (
        <div className="Home">
            <Navbar />
            <Landing />
            <Intro />
            <Services />
            <Methods />
            <Reviews />
            <Footer />
        </div>
    )

}

export default Home