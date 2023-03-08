import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        <DatePicker dateFormat={"dd/M/yyyy"} selected={selectedDate} onChange={handleDateChange} />

    );
};

export default DatePickerComponent;

// dateFormat = "dd/M/yyyy"
