import React from 'react';
import logo from "../assets/tbLogo.png";
import {NavLink} from "react-router-dom";
import './styles/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h1>
                        <img src={logo} alt={"Logo"} width={50} height={50}/>
                        TravelBuddy
                    </h1>
                </div>
                <div className="nav-elements">
                    <ul>
                        <li>
                            <NavLink to="/">Hotels</NavLink>
                        </li>
                        <li>
                            <NavLink to="/flights">Flights</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cars">Cars</NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;