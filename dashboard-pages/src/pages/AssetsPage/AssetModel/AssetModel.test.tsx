import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
//import rootReducer from "./reducers";
import type { Reducer } from "@reduxjs/toolkit";
declare const reducer: Reducer<{}>;
export default reducer;

// file: store.ts
import { configureStore } from "@reduxjs/toolkit";

//import { configureStore } from "@reduxjs/toolkit";
import AssetModel from "./AssetModel";

const mockstore = configureStore({ reducer });

describe("AssetModel", () => {
  let store;

  beforeEach(() => {
    store = mockstore({
      Common: {
        assetlistOfAssetModelByplantid: [
          { assetId: 1, name: "Asset 1" },
          { assetId: 2, name: "Asset 2" },
        ],
        AnomalyModelbyAssetId: [],
        FailurepreDictionByAssetId: [],
        GraphicalImageByAssetId: [],
        AssetKPIForAssetModel: [],
      },
    });
  });

  it("should render the component", () => {
    render(
      <Provider store={store}>
        <AssetModel />
      </Provider>
    );

    expect(screen.getByText("GRAPHICAL OVERVIEW")).toBeInTheDocument();
  });

  it("should render asset options", () => {
    render(
      <Provider store={store}>
        <AssetModel />
      </Provider>
    );

    expect(screen.getByText("Asset 1")).toBeInTheDocument();
    expect(screen.getByText("Asset 2")).toBeInTheDocument();
  });

  it("should dispatch actions on asset change", () => {
    render(
      <Provider store={store}>
        <AssetModel />
      </Provider>
    );

    const select = screen.getByRole("combobox");
    userEvent.selectOptions(select, "2");

    expect(store.getActions()).toEqual([
      { type: "GET_ASSET_LIST_REQUEST" },
      { type: "GET_ANOMALY_MODEL_REQUEST" },
      { type: "GET_FAILURE_PREDICTION_REQUEST" },
      { type: "GET_GRAPHICAL_IMAGE_REQUEST" },
      { type: "GET_ASSET_KPI_REQUEST" },
    ]);
  });
});
