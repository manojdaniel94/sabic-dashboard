import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders the button with the provided name", () => {
    const buttonName = "Click me";
    const { getByText } = render(
      <Button buttonName={buttonName} onClickHandler={() => {}} />
    );
    expect(getByText(buttonName)).toBeInTheDocument();
  });

  it("calls the onClickHandler when the button is clicked", () => {
    const buttonName = "Click me";
    const onClickHandler = jest.fn();
    const { getByText } = render(
      <Button buttonName={buttonName} onClickHandler={onClickHandler} />
    );
    fireEvent.click(getByText(buttonName));
    expect(onClickHandler).toHaveBeenCalled();
  });
});
