import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dropdown from "./Dropdown";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("Dropdown component", () => {
  it("renders options passed as props", () => {
    render(<Dropdown options={options} />);
    const option1 = screen.getByText("Option 1");
    const option2 = screen.getByText("Option 2");
    const option3 = screen.getByText("Option 3");
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it("calls handleChange function when an option is selected", () => {
    const handleChange = jest.fn();
    render(<Dropdown options={options} handleChange={handleChange} />);
    const option2 = screen.getByText("Option 2");
    fireEvent.click(option2);
    expect(handleChange).toHaveBeenCalledWith(options[1]);
  });

  it("displays the selected value when value prop is passed", () => {
    render(<Dropdown options={options} value={options[2]} />);
    const selectedOption = screen.getByText("Option 3");
    expect(selectedOption).toBeInTheDocument();
  });

  it("displays the default value when defaultValue prop is passed", () => {
    render(<Dropdown options={options} defaultValue={options[1]} />);
    const defaultValue = screen.getByText("Option 2");
    expect(defaultValue).toBeInTheDocument();
  });

  it("displays multi-select when multi prop is true", () => {
    render(<Dropdown options={options} multi={true} />);
    const dropdownIndicator = screen.queryByTitle("Clear all");
    expect(dropdownIndicator).toBeInTheDocument();
  });
});
