import React from "react";
import { render, screen } from "@testing-library/react";
import BreadCrumb from "./BreadCrumb";
import "@testing-library/jest-dom/extend-expect";

describe("BreadCrumb", () => {
  it("renders the breadcrumb correctly", () => {
    render(<BreadCrumb />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    const yanpetLink = screen.getByRole("link", { name: /yanpet/i });
    const pollyLink = screen.getByRole("link", { name: /polly 2/i });

    expect(homeLink).toHaveAttribute("href", "#");
    expect(yanpetLink).toHaveAttribute("href", "#");
    expect(pollyLink).toHaveClass("active");
  });
});
