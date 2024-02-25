import React from 'react';
import logo from "../assets/tbLogo.png";

function NavBar() {
    return (
        <div className="navbar-container">
            <h1>
                <img src={logo} alt={"Logo"} width={50} height={50}/>
                NavBar
            </h1>

        </div>
    );
}

export default NavBar;