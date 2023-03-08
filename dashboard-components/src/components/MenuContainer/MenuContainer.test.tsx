import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MenuContainer from "./MenuContainer";
import "@testing-library/jest-dom/extend-expect";

describe("MenuContainer component", () => {
  const mockData = [
    { id: 1, value: "Option 1" },
    { id: 2, value: "Option 2" },
    { id: 3, value: "Option 3" },
  ];

  let mockHandleMenuClick;
  let mockGetSelectedclassName;

  beforeEach(() => {
    mockHandleMenuClick = jest.fn();
    mockGetSelectedclassName = jest.fn((id) => (id === 2 ? "selected" : ""));
  });

  it.skip("renders the correct number of menu items", () => {
    const { getAllByRole } = render(
      <MenuContainer
        data={mockData}
        handleMenuClick={mockHandleMenuClick}
        getSelectedclassName={mockGetSelectedclassName}
      />
    );
    const menuItems = getAllByRole("button");
    expect(menuItems.length).toEqual(mockData.length);
  });

  it("calls handleMenuClick with the correct id when a menu item is clicked", () => {
    const { getByText } = render(
      <MenuContainer
        data={mockData}
        handleMenuClick={mockHandleMenuClick}
        getSelectedclassName={mockGetSelectedclassName}
      />
    );
    const menuItem = getByText("Option 1");
    fireEvent.click(menuItem);
    expect(mockHandleMenuClick).toHaveBeenCalledWith(1);
  });

  it("applies the correct className to the selected menu item", () => {
    const { getByText } = render(
      <MenuContainer
        data={mockData}
        handleMenuClick={mockHandleMenuClick}
        getSelectedclassName={mockGetSelectedclassName}
      />
    );
    const selectedItem = getByText("Option 2");
    expect(selectedItem).toHaveClass("selected");
  });
});
