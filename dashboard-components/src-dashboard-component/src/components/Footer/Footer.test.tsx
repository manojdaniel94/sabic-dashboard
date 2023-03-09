import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders the correct copyright text", () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/2023 SABIC/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
