import React from "react";
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
const InputBar = () => {
    return (
        <div className="input-container">
            <TextField
                className="input-field"
                id="outlined-basic"
                label="Search Hotels"
                variant="outlined"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker className="date-field"
                                label="From" />
                </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DatePicker']} className="date-container">
                    <DatePicker className="date-field"
                                label="To" />
                </DemoContainer>
            </LocalizationProvider>
            <TextField
                className="input-field"
                id="outlined-basic"
                label="Travelers"
                variant="outlined"
            />
        </div>
    )
};
export default InputBar;