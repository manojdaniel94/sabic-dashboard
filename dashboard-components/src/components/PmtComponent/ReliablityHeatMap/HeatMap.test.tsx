import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReliabilityHeatMap from "./ReliablityHeatMap";
import "@testing-library/jest-dom/extend-expect";

describe("ReliabilityHeatMap", () => {
  const statusData = {
    assetOff: { value: 3, percentage: 5 },
    warning: { value: 7, percentage: 12 },
    normal: { value: 50, percentage: 83 },
    assetUnderRisk: { value: 0, percentage: 0 },
  };
  const toolTipData = [
    { assetId: "asset1", assetHealthIndex: 80 },
    { assetId: "asset2", assetHealthIndex: 60 },
    { assetId: "asset3", assetHealthIndex: 40 },
  ];
  const selectedHeatStatus = "normal";
  const setMouseHover = jest.fn();
  const mouseHover = { over: false, statusName: "" };

  it("renders a Heatmap with labels and tooltips", () => {
    const { getByText, getByTestId } = render(
      <ReliabilityHeatMap
        statusData={statusData}
        toolTipData={toolTipData}
        selectedHeatStatus={selectedHeatStatus}
        setMouseHover={setMouseHover}
        mouseHover={mouseHover}
      />
    );

    // Check that the Heatmap image is displayed
    expect(getByTestId("heatmap-image")).toBeInTheDocument();

    // Check that the labels are displayed with the correct values and colors
    expect(getByText("3 (5%)")).toHaveClass("asset-off");
    expect(getByText("7 (12%)")).toHaveClass("warning");
    expect(getByText("50 (83%)")).toHaveClass("normal");
    expect(getByText("0 (0%)")).toHaveClass("asset-under-risk");

    // Check that the tooltip is not displayed by default
    expect(getByTestId("tooltip")).toHaveStyle("display: none;");

    // Trigger mouse hover over a label
    fireEvent.mouseEnter(getByText("50 (83%)"));

    // Check that the tooltip is displayed with the correct content
    expect(getByTestId("tooltip")).toHaveTextContent(
      "Assets with Normal Health Index: 50 (83%)"
    );
    expect(getByTestId("tooltip")).toHaveStyle("display: block;");

    // Trigger mouse leave from the label
    fireEvent.mouseLeave(getByText("50 (83%)"));

    // Check that the tooltip is hidden again
    expect(getByTestId("tooltip")).toHaveStyle("display: none;");
  });

  it("calls setMouseHover function when a label is hovered over", () => {
    const { getByText } = render(
      <ReliabilityHeatMap
        statusData={statusData}
        toolTipData={toolTipData}
        selectedHeatStatus={selectedHeatStatus}
        setMouseHover={setMouseHover}
        mouseHover={mouseHover}
      />
    );

    // Trigger mouse hover over a label
    fireEvent.mouseEnter(getByText("7 (12%)"));

    // Check that setMouseHover function is called with the correct arguments
    expect(setMouseHover).toHaveBeenCalledWith({
      over: true,
      statusName: "warning",
    });

    // Trigger mouse leave from the label
    fireEvent.mouseLeave(getByText("7 (12%)"));

    // Check that setMouseHover function is called again with the correct arguments
    expect(setMouseHover).toHaveBeenCalledWith({
      over: false,
      statusName: "warning",
    });
  });
});
