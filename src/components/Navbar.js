import React, { useState } from 'react';

import '../css/Navbar.css';
import { FaAlignJustify } from 'react-icons/fa';
import { FaAlignRight } from 'react-icons/fa';


 

function Navbar() {

    const [tgl, setShowTgl] = useState(false);

    function handleClick() {
        setShowTgl(!tgl);
    }

    return (
        <nav className="navbar">
            <p className="logo"><strong id="logo-sm">SM-</strong>consulting</p>

            <ul className="nav-ul">
                <li className="nav-li">Contact</li>
                <li className="nav-li">Experience</li>
            </ul>

            <div className="resp-container">

                {!tgl ? (
                    <FaAlignJustify className="responsive-menu" onClick={() => handleClick()} />

                ) : (
                    <FaAlignRight className="responsive-menu" onClick={() => handleClick()} />

                )}

            </div>

        </nav>
    )

}

export default Navbar