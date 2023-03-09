import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';

interface Props {
    handleDateChange: any;
    selectedDate: any;

}

const DatePickerComponent = ({ selectedDate, handleDateChange }: Props) => {

    // const onDateChange = (date: any) => {
    //     const dateString = new Date(date).toLocaleString();
    //     console.log(dateString);
    //     setFromDate(date);
    // };
    return (
        <DatePicker dateFormat={"dd/M/yyyy"} selected={selectedDate} onChange={handleDateChange} inline />

    );
};

export default DatePickerComponent;

// dateFormat = "dd/M/yyyy"
