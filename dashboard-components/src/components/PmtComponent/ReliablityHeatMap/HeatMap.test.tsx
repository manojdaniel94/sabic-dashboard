import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReliabilityHeatMap from "./ReliablityHeatMap";

describe("ReliabilityHeatMap component", () => {
  const statusData = {
    assetOff: { value: 1 },
    warning: { value: 2 },
    normal: { value: 3 },
    assetUnderRisk: { value: 4 },
  };

  const toolTipData = [
    { assetId: "1", assetHealthIndex: 50 },
    { assetId: "2", assetHealthIndex: 80 },
    { assetId: "3", assetHealthIndex: 60 },
    { assetId: "4", assetHealthIndex: 90 },
  ];

  const selectedHeatStatus = "";
  const setMouseHover = jest.fn();
  const mouseHover = { over: false, statusName: "" };

  it("renders the component", () => {
    const { container } = render(
      <ReliabilityHeatMap
        statusData={statusData}
        toolTipData={toolTipData}
        selectedHeatStatus={selectedHeatStatus}
        setMouseHover={setMouseHover}
        mouseHover={mouseHover}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("displays asset-off data", () => {
    const { getByText } = render(
      <ReliabilityHeatMap
        statusData={statusData}
        toolTipData={toolTipData}
        selectedHeatStatus="Asset-off"
        setMouseHover={setMouseHover}
        mouseHover={mouseHover}
      />
    );

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("Asset-Off")).toBeInTheDocument();
    expect(getByText("Off")).toBeInTheDocument();
    expect(getByText("1")).toHaveClass("hi-off");
  });

  it("displays normal data", () => {
    const { getByText } = render(
      <ReliabilityHeatMap
        statusData={statusData}
        toolTipData={toolTipData}
        selectedHeatStatus="Normal"
        setMouseHover={setMouseHover}
        mouseHover={mouseHover}
      />
    );

    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("Normal")).toBeInTheDocument();
    expect(getByText("Health Index > 70%")).toBeInTheDocument();
    expect(getByText("3")).toHaveClass("hi-normal");
  });

  it("displays warning data", () => {
    const { getByText } = render(
      <ReliabilityHeatMap
        statusData={statusData}
        toolTipData={toolTipData}
        selectedHeatStatus="Warning"
        setMouseHover={setMouseHover}
        mouseHover={mouseHover}
      />
    );

    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("Warning")).toBeInTheDocument();
    expect(getByText("Health Index < 70%")).toBeInTheDocument();
    expect(getByText("2")).toHaveClass("hi-warning");
  });

  it("displays asset under risk data", () => {
    const { getByText } = render(
      <ReliabilityHeatMap
        statusData={statusData}
        toolTipData={toolTipData}
        selectedHeatStatus="Asset Under Risk"
        setMouseHover={setMouseHover}
        mouseHover={mouseHover}
      />
    );

    // expect(getByText("4")).toBeInTheDocument();
    expect(getByText("Asset Under Risk")).toBeInTheDocument();
    expect(getByText("Health Index Under Risk")).toBeInTheDocument();
    expect(getByText("4")).toHaveClass("hi-risk");
  });
});
