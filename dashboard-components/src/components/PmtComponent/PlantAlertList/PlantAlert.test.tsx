import React from "react";
import { render } from "@testing-library/react";
import PlantAlertList from "./PlantAlertList";
import "@testing-library/jest-dom/extend-expect";

describe("PlantAlertList", () => {
  const data = [
    {
      timeStamp: "2022-01-01T00:00:00Z",
      assetId: "asset-1",
      description: "Alert 1",
      status: "Active",
    },
    {
      timeStamp: "2022-01-02T00:00:00Z",
      assetId: "asset-2",
      description: "Alert 2",
      status: "Resolved",
    },
  ];

  it("should render the title and asset name", () => {
    const { getByText } = render(<PlantAlertList data={data} />);
    expect(getByText("PMT ALERT LIST")).toBeInTheDocument();
    expect(getByText("Polly 2")).toBeInTheDocument();
  });

  it("should render the table columns", () => {
    const { getByText } = render(<PlantAlertList data={data} />);
    expect(getByText("TIME STAMP")).toBeInTheDocument();
    expect(getByText("ASSET ID")).toBeInTheDocument();
    expect(getByText("ALERT DESCRIPTION")).toBeInTheDocument();
    expect(getByText("ALERT STATUS")).toBeInTheDocument();
  });

  it("should render the data in the table", () => {
    const { getByText } = render(<PlantAlertList data={data} />);
    expect(getByText("2022-01-01T00:00:00Z")).toBeInTheDocument();
    expect(getByText("asset-1")).toBeInTheDocument();
    expect(getByText("Alert 1")).toBeInTheDocument();
    expect(getByText("Active")).toBeInTheDocument();
    expect(getByText("Resolved")).toBeInTheDocument();
  });

  it("should render the status with color", () => {
    const { getByText } = render(<PlantAlertList data={data} />);
    expect(getByText("Active")).toHaveStyle("color: red");
    expect(getByText("Resolved")).toHaveStyle("color: green");
  });
});
