import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { configureStore } from "@reduxjs/toolkit";
import PmtDashboard from "./index";
import {
  getRegions,
  getAssetListByPlantId,
  getPlantAlertSpmt,
  getAssetCardPmtByPlantId,
  getAssetStatusPmtByPlantId,
  getStatusAssetPmtByPlantId,
  getssetStatusListbyPlantId,
  getHeatMapToolTipbyAssetStatus,
  getTopBarToolTipbyPlantId,
} from "../../../redux/reducers/CommonReducer";

jest.mock("../../../redux/reducers/CommonReducer", () => ({
  getRegions: jest.fn(),
  getAssetListByPlantId: jest.fn(),
  getPlantAlertSpmt: jest.fn(),
  getAssetCardPmtByPlantId: jest.fn(),
  getAssetCardPmtByAssetId: jest.fn(),
  getAssetStatusPmtByPlantId: jest.fn(),
  getStatusAssetPmtByPlantId: jest.fn(),
  getssetStatusListbyPlantId: jest.fn(),
  getHeatMapToolTipbyAssetStatus: jest.fn(),
  getTopBarToolTipbyPlantId: jest.fn(),
}));

const mockStore = configureStore([]);

describe("PmtDashboard", () => {
  let store: any;

  beforeEach(() => {
    store = store({
      Common: {
        regions: [],
        assetListByPlant: [],
        plantAlertSpmt: [],
        assetCardPmtByplantId: [],
        assetCardPmtByAssetId: [],
        assetStatusPmtByPlantId: [],
        statusAssetPmtByPlantId: [],
        setStatusListbyPlantId: [],
        heatMapToolTipbyAssetStatus: [],
        topBarToolTipbyPlantId: [],
      },
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <PmtDashboard />
      </Provider>
    );
  });

  test("should dispatch all required actions on mount", () => {
    expect(store.dispatch).toHaveBeenCalledTimes(8);
    expect(getRegions).toHaveBeenCalledWith("1");
    expect(getAssetListByPlantId).toHaveBeenCalledWith("18");
    expect(getPlantAlertSpmt).toHaveBeenCalledWith("18");
    expect(getAssetCardPmtByPlantId).toHaveBeenCalledWith("18");
    expect(getAssetStatusPmtByPlantId).toHaveBeenCalledWith("18");
    expect(getStatusAssetPmtByPlantId).toHaveBeenCalledWith("18");
    expect(getssetStatusListbyPlantId).toHaveBeenCalledWith("18");
    expect(getTopBarToolTipbyPlantId).toHaveBeenCalledWith("18");
  });

  // add more test cases as needed
});
