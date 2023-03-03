
import React from "react";
import Home from "../pages/Home";
import Affiliates from "../pages/Affiliates";
import Plant from "../pages/Plant";
import Assets from "../pages/Assets";
import Pmt from "../pages/Pmt";
import { Routes, Route } from "react-router-dom";
import { HOME_ROUTE, AFFILIATES_ROUTE, ASSETS_ROUTE, PLANT_ROUTE, PMT_ROUTE } from "../constant/constants"


const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route index path={HOME_ROUTE} element={<Home />} />
            <Route path={AFFILIATES_ROUTE} element={<Affiliates />} />
            <Route path={PLANT_ROUTE} element={<Plant />} />
            <Route path={PMT_ROUTE} element={<Pmt />} />
            <Route path={ASSETS_ROUTE} element={<Assets />} />
        </Routes>
    )
}

export default Router;
