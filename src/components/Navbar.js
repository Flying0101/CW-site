import React, { useState } from 'react';

import '../css/Navbar.css';
import { FaAlignJustify } from 'react-icons/fa';
import { FaAlignRight } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';


function Navbar() {

    const [tgl, setShowTgl] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowTgl(!tgl);
        setShowModal(!showModal);
    }

    return (
        <div>{!showModal ? (
            <nav className="navbar">
                <p className="logo"><strong id="logo-sm">SM-</strong>consulting</p>

                <ul className="nav-ul">
                    <li className="nav-li">Om</li>
                    <li className="nav-li">Kundcase</li>
                    <li className="nav-li">Tjänster</li>
                    <li className="nav-li">Kontakt</li>
                </ul>

                <div className="resp-container">

                    {!tgl ? (
                        <FaAlignJustify className="responsive-menu" onClick={() => handleClick()} />

                    ) : (
                        <FaAlignRight className="responsive-menu" onClick={() => handleClick()} />

                    )}

                </div>

            </nav>

        ) : (
            <nav className="nav-modal">
                <FaTimes className="modal-menu" onClick={() => handleClick()} />
                <ul className="m-nav-ul">
                    <li className="m-nav-li">Om</li>
                    <li className="m-nav-li">Kundcase</li>
                    <li className="m-nav-li">Tjänster</li>
                    <li className="m-nav-li">Kontakt</li>
                </ul>
            </nav>
        )}</div>

    )

}

export default Navbar