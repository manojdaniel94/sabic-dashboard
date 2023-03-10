import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import "./styles.scss";
import Router from "./routes/Router";
import Header from "components/Header";
import BreadCrumb from "components/BreadCrumb";
//import CalendarComponent from "components/CalendarComponent";
import CalendarComponent from "./components/CalendarComponent/CalendarComponent";
import Footer from "components/Footer";
import store from "./redux";

const App = (props) => (
  <Provider store={store}>
    <div id="container">
      <Header />
      <div id="content">
        <div className="content-inner">
          <div id="breadcrumb">
            <BreadCrumb />
            <CalendarComponent />
          </div>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
      </div>
      <Footer />
    </div>
  </Provider>

);
ReactDOM.render(<App />, document.getElementById("app"));
