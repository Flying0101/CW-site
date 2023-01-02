import React from 'react';


import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Methods from '../components/Methods';

function Home() {




    return (
        <div className="Home">
            <Navbar />
            <Landing />
            <Intro />
            <Services />
            <Methods />
        </div>
    )

}

export default Home