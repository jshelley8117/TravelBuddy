import * as React from 'react';
import TextField from '@mui/material/TextField';
import './styles/HotelSearch.css';

const HotelSearch = () => {
    return (
    <div className="input-container-hotel-search">
        <h2>Search by Property Name</h2>
        <TextField
            className="input-field-hotel-search"
            id="outlined-basic"
            label="Search"
            variant="outlined"
        />
    </div>
    );
}
export default HotelSearch;