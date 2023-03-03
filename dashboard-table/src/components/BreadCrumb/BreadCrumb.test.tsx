import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import BreadCrumb from "./BreadCrumb";

describe("BreadCrumb component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Router>
        <BreadCrumb />
      </Router>
    );

    expect(getByText("sabic")).toBeInTheDocument();
  });
});
