import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LiveModel from "./LiveModel";

describe("LiveModel component", () => {
  const FailurepreDictionByAssetId = [
    {
      modelName: "Model 1",
      rul: 30,
      confidenceFactor: 80,
    },
    {
      modelName: "Model 2",
      rul: 20,
      confidenceFactor: 90,
    },
  ];

  const AnomalyModelbyAssetId = [
    {
      sensorGroup: "Sensor 1",
      healthIndex: 60,
      healthIndexTrend: true,
    },
    {
      sensorGroup: "Sensor 2",
      healthIndex: 40,
      healthIndexTrend: false,
    },
  ];

  it("should render the LiveModel component", () => {
    const { getByText } = render(
      <LiveModel
        FailurepreDictionByAssetId={FailurepreDictionByAssetId}
        AnomalyModelbyAssetId={AnomalyModelbyAssetId}
      />
    );

    expect(getByText("LIVE MODELS")).toBeInTheDocument();
    expect(getByText("K-1701")).toBeInTheDocument();
  });

  it("should toggle Anomaly Model panel on click", () => {
    const { getByText, queryByText } = render(
      <LiveModel
        FailurepreDictionByAssetId={FailurepreDictionByAssetId}
        AnomalyModelbyAssetId={AnomalyModelbyAssetId}
      />
    );

    const toggleButton = getByText("Anomaly Model +");
    fireEvent.click(toggleButton);

    expect(queryByText("Model Name")).toBeInTheDocument();
    expect(getByText("Anomaly Model -")).toBeInTheDocument();
  });

  it("should toggle Failure Prediction panel on click", () => {
    const { getByText, queryByText } = render(
      <LiveModel
        FailurepreDictionByAssetId={FailurepreDictionByAssetId}
        AnomalyModelbyAssetId={AnomalyModelbyAssetId}
      />
    );

    const toggleButton = getByText("Failure Prediction +");
    fireEvent.click(toggleButton);

    expect(queryByText("MODEL NAME")).toBeInTheDocument();
    expect(getByText("Failure Prediction -")).toBeInTheDocument();
  });

  it("should open asset popup on row click", () => {
    const { getByText, queryByText } = render(
      <LiveModel
        FailurepreDictionByAssetId={FailurepreDictionByAssetId}
        AnomalyModelbyAssetId={AnomalyModelbyAssetId}
      />
    );

    const row = getByText("Model 1 30 80");
    fireEvent.click(row);

    expect(queryByText("P-F-CURVE")).toBeInTheDocument();
    expect(queryByText("Model 1")).toBeInTheDocument();
  });
});
