import React from "react";
import { render } from "@testing-library/react";
import AssetCard from "./AssetCard";
import "@testing-library/jest-dom/extend-expect";
//import Column from "antd/es/table/Column";

describe("AssetCard component", () => {
  const data = [
    {
      timeStamp: "2022-02-28T16:10:12.000Z",
      description: "Alert 1",
      status: "Active",
    },
    {
      timeStamp: "2022-02-28T16:20:12.000Z",
      description: "Alert 2",
      status: "Resolved",
    },
  ];

  it("renders a table with the correct columns and data", () => {
    const { getByText } = render(<AssetCard data={data} />);

    expect(getByText("TIME STAMP")).toBeInTheDocument();
    expect(getByText("ALERT DESCRIPTION")).toBeInTheDocument();
    expect(getByText("ALERT STATUS")).toBeInTheDocument();

    expect(getByText("2022-02-28T16:10:12.000Z")).toBeInTheDocument();
    expect(getByText("Alert 1")).toBeInTheDocument();
    expect(getByText("Active")).toHaveStyle("color: red");

    expect(getByText("2022-02-28T16:20:12.000Z")).toBeInTheDocument();
    expect(getByText("Alert 2")).toBeInTheDocument();
    expect(getByText("Resolved")).toHaveStyle("color: green");
  });
});
