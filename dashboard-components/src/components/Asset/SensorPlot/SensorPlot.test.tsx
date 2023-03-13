import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SensorPlot from "./SensorPlot";

describe("SensorPlot", () => {
  it("renders a button", () => {
    const { getByRole } = render(<SensorPlot />);
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("renders a button with the correct class name", () => {
    const { getByRole } = render(<SensorPlot />);
    expect(getByRole("button")).toHaveClass("btn");
  });

  //   it("calls onClickHandler prop when button is clicked", () => {
  //     const onClickHandlerMock = jest.fn();
  //     const { getByRole } = render(
  //       <SensorPlot onClickHandler={onClickHandlerMock} />
  //     );
  //     fireEvent.click(getByRole("button"));
  //     expect(onClickHandlerMock).toHaveBeenCalledTimes(1);
  //   });

  //   it("displays the correct button name", () => {
  //     const buttonName = "Click me";
  //     const { getByRole } = render(<SensorPlot buttonName={buttonName} />);
  //     expect(getByRole("button")).toHaveTextContent(buttonName);
  //   });
});
