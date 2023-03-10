import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("Header", () => {
  it("renders the logo and navigation links", () => {
    render(<Header />);
    const logo = screen.getByAltText("Sabic Logo");
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByText("HOME");
    expect(homeLink).toBeInTheDocument();

    const affiliatesLink = screen.getByText("AFFILIATES");
    expect(affiliatesLink).toBeInTheDocument();

    const plantsLink = screen.getByText("PLANTS");
    expect(plantsLink).toBeInTheDocument();

    const assetsLink = screen.getByText("ASSETS");
    expect(assetsLink).toBeInTheDocument();

    const executiveLink = screen.getByText("EXECUTIVE");
    expect(executiveLink).toBeInTheDocument();

    const infoLink = screen.getByText("INFO");
    expect(infoLink).toBeInTheDocument();
  });

  it("displays the user name", () => {
    render(<Header />);
    const userName = screen.getByText("User");
    expect(userName).toBeInTheDocument();
  });
});
