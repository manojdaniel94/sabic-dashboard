import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";

interface Props {
  options?: any;
  handleChange?: any;
  value?: any;
  defaultValue?: any;
  multi?: any;
}

// initial
const Dropdown = ({
  options,
  handleChange,
  value,
  defaultValue,
  multi,
}: Props) => {
  return (
    <>
      <Select
        styles={{
          option: (provided, state) => ({
            ...provided,
            color: "#333333",
            backgroundColor: state.isSelected ? "#c5E7F7" : "white",
          }),
          valueContainer: (provided, state) => ({
            ...provided,
            height: "30px",
            padding: "0 6px",
          }),
        }}
        // background:#c5E7F7
        options={options}
        onChange={handleChange}
        data-testid="select"
        value={value}
        defaultValue={defaultValue}
        // isMulti={multi}
        components={
          multi && {
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }
        }
      />
    </>
  );
};

export default Dropdown;
