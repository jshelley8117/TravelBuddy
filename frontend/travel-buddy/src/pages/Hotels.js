import React from 'react';
import logo from "../assets/tbLogo.png";
import './styles/Hotels.css';
import HotelSearch from "../components/HotelSearch";

function Hotels() {
        return (
            <div className="hotels-container">
                <h1>Hotels</h1>
                <HotelSearch />

            </div>
        );
}

export default Hotels;