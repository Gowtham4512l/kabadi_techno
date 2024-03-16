import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <div>
                <a href="/" className="logo">
                    <img src="../images/logo.png" alt="Kabadi Techno Logo" />
                </a>

                <ul className={isOpen ? "navlist navlist_active" : "navlist"}>
                    <li>
                        <a href="/about" className="navlink" onClick={() => setIsOpen(false)}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="/join_us" className="navlink" onClick={() => setIsOpen(false)}>
                            JOIN US
                        </a>
                    </li>
                    <li>
                        <a href="/sell" className="navlink" onClick={() => setIsOpen(false)}>
                            SELL
                        </a>
                    </li>
                    <li>
                        <a href="/faq" className="navlink" onClick={() => setIsOpen(false)}>
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="navlink" onClick={() => setIsOpen(false)}>
                            CONTACT
                        </a>
                    </li>
                    <li>
                        <a href="/sign_in" className="navlink active_navlink" onClick={() => setIsOpen(false)}>
                            SIGN IN
                        </a>
                    </li>
                </ul>

                <div
                    className="menu"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    {!isOpen ? <span>&#9776;</span> : <span>&times;</span>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
