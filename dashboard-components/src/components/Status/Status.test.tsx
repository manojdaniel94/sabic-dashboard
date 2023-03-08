import React from "react";
import { render } from "@testing-library/react";
import { act, screen } from '@testing-library/dom';
import Status from "./Status";

it("Status component should render the correct text", () => {
  const dataObject = [
    {
      "affiliateCount": 1,
      "assetCount": 111,
      "healthIndex": 28,
      "pmCompliance": 0,
      "spare": "NA",
      "active": 0,
      "overdueInvestigation": 0,
      "underInvestigation": 0
    }
  ];
  const healthIndexObject = [
    {
      "AssetSapId": 310059910,
      "AssetHealthIndex": 0,
      "AssetTrend": 0,
      "PlantHealth": 28,
      "PlantTrend": 1,
      "AssetId": "2K-3101",
      "PlantId": 18,
      "AssetName": "Cycle Gas Compressor 4"
    }
  ]
  render(
    <Status data={dataObject} page="PLANT" healthIndex= {healthIndexObject} />
  );
  expect(screen.getByRole('img')).toBeInTheDocument();
  // expect(screen.getByText("HOME")).toBeInTheDocument(); screen.getByRole('dialog')
});
