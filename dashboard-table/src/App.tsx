import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";
import "./styles.scss";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import CalendarComponent from "./components/CalendarComponent/CalendarComponent";

const App = () => {

  return (
    <>
      <div id="container">
        <Header />
        <div id="content">
          <div className="content-inner">
            <div id="breadcrumb">
              <BreadCrumb />
              <CalendarComponent />
            </div>
            <Router />
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
};

export default App;
