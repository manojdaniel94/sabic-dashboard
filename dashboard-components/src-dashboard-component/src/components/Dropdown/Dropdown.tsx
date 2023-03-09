import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";

interface Props {
  options?: any;
  handleChange?: any;
  value?: any
  defaultValue?: any
}

// initial
const Dropdown = ({ options, handleChange, value, defaultValue }: Props) => {
  return (
    <>
      <Select
        styles={{
          option: (provided) => ({
            ...provided,
            color: "black",
          }),
        }}
        options={options}
        onChange={handleChange}
        data-testid="select"
        value={value}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default Dropdown;
