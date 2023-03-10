import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Status from "./Status";
import "@testing-library/jest-dom/extend-expect";

describe("Status component", () => {
  const data = [
    {
      affiliateCount: 5,
      assetCount: 10,
      healthIndex: 80,
      pmCompliance: "90%",
      spare: "Available",
      active: 20,
      underInvestigation: 2,
      overdueInvestigation: 3,
    },
  ];

  const healthIndex = [
    {
      AssetId: "K-18022",
      PlantHealth: 50,
    },
    {
      AssetId: "K-16033",
      PlantHealth: 90,
    },
  ];

  it("should render status component correctly with the given data", () => {
    const { getByText, getByTitle } = render(
      <Status data={data} page="PLANT" healthIndex={healthIndex} />
    );

    expect(getByTitle("Affiliates")).toBeInTheDocument();
    expect(getByTitle("Assets")).toBeInTheDocument();
    expect(getByTitle("Health_Index")).toBeInTheDocument();
    expect(getByTitle("PM_Compliance")).toBeInTheDocument();
    expect(getByTitle("Spares_Availability")).toBeInTheDocument();
    expect(getByTitle("Active")).toBeInTheDocument();
    expect(getByTitle("Under_Investigate")).toBeInTheDocument();
    expect(getByTitle("Overdue_Investigate")).toBeInTheDocument();

    fireEvent.mouseOver(getByTitle("Health_Index"));
    expect(getByText("HEALTH INDEX")).toBeInTheDocument();
    expect(getByText("K-18022")).toBeInTheDocument();
    expect(getByText("50%")).toBeInTheDocument();
    expect(getByText("K-16033")).toBeInTheDocument();
    expect(getByText("90%")).toBeInTheDocument();
  });

  test("renders the component without data", () => {
    const { queryByText } = render(
      <Status data={[]} page="PLANT" healthIndex={[]} />
    );

    expect(queryByText("AFFILIATES")).toBeNull();
    expect(queryByText("ASSETS")).toBeNull();
    expect(queryByText("HEALTH INDEX")).toBeNull();
    expect(queryByText("PM COMPLIANCE")).toBeNull();
    expect(queryByText("SPARES AVAILABILITY")).toBeNull();
    expect(queryByText("ACTIVE")).toBeNull();
    expect(queryByText("UNDER INVESTIGATION")).toBeNull();
    expect(queryByText("OVERDUE INVESTIGATION")).toBeNull();
  });

  test("does not render the component when page is not PLANT", () => {
    const { queryByText } = render(
      <Status data={data} page="OTHER" healthIndex={healthIndex} />
    );

    expect(queryByText("AFFILIATES")).toBeNull();
    expect(queryByText("ASSETS")).toBeNull();
    expect(queryByText("HEALTH INDEX")).toBeNull();
    expect(queryByText("PM COMPLIANCE")).toBeNull();
    expect(queryByText("SPARES AVAILABILITY")).toBeNull();
    expect(queryByText("ACTIVE")).toBeNull();
    expect(queryByText("UNDER INVESTIGATION")).toBeNull();
    expect(queryByText("OVERDUE INVESTIGATION")).toBeNull();
  });
});
