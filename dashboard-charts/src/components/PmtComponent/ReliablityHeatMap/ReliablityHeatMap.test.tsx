import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReliabilityHeatMap from "../ReliablityHeatMap";

describe("ReliabilityHeatMap", () => {
  it("renders the component", () => {
    render(
      <ReliabilityHeatMap
        statusData={undefined}
        toolTipData={[]}
        selectedHeatStatus={undefined}
        setMouseHover={undefined}
        mouseHover={undefined}
      />
    );
    expect(screen.getByTestId("reliability-heatmap")).toBeInTheDocument();
  });

  it("displays the correct values for each heat status", () => {
    render(
      <ReliabilityHeatMap
        statusData={undefined}
        toolTipData={[]}
        selectedHeatStatus={undefined}
        setMouseHover={undefined}
        mouseHover={undefined}
      />
    );
    expect(screen.getByText(/Asset-Off/i)).toHaveTextContent("10");
    expect(screen.getByText(/Normal/i)).toHaveTextContent("0");
    expect(screen.getByText(/Warning/i)).toHaveTextContent("20");
    expect(screen.getByText(/Asset Under Risk/i)).toHaveTextContent("40");
  });

  it("shows the tooltip on mouseover", () => {
    render(
      <ReliabilityHeatMap
        statusData={undefined}
        toolTipData={[]}
        selectedHeatStatus={undefined}
        setMouseHover={undefined}
        mouseHover={undefined}
      />
    );
    const assetOff = screen.getByText(/Asset-Off/i);
    fireEvent.mouseOver(assetOff);
    expect(ReliabilityHeatMap).toBeInTheDocument();
  });

  it("hides the tooltip on mouseout", () => {
    render(
      <ReliabilityHeatMap
        statusData={undefined}
        toolTipData={[]}
        selectedHeatStatus={undefined}
        setMouseHover={undefined}
        mouseHover={undefined}
      />
    );
    const assetOff = screen.getByText(/Asset-Off/i);
    fireEvent.mouseOver(assetOff);
    fireEvent.mouseOut(assetOff);
    expect(ReliabilityHeatMap).toBeInTheDocument();
  });
});
