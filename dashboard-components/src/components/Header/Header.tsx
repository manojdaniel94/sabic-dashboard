import React from "react";
import "./Header.scss";
import sabiclogo from "../../assets/images/sabic-logo.svg";
import IconProfile from "../../assets/images/icon_Profile.svg";
import iconSearchWhite from "../../assets/images/icon_Search_White.svg";
import iconSettingsWhite from "../../assets/images/icon_Settings_White.svg";

import iconSearch from "../../assets/images/icon_Search.svg";
import iconAlerts from "../../assets/images/icon_Alerts.svg";
import iconSettings from "../../assets/images/icon_Settings.svg";
import iconProfile from "../../assets/images/icon_Profile.svg";
import imageSabicLogo from "../../assets/images/image_Sabic_Logo.svg";

const Header = () => {
  const componentAppBasePath = "http://localhost:3001/src/assets/images/";
  // const componentAppBasePath = "src/assets/images/";
  return (
    // <HeaderParent>
    <div id="header">
      <div className="header-inner">
        <div className="mobilemenu">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="mobile-menu-items">
            <div className="mobile-menu-header">
              <div className="username"><a href="#"><span><img src={componentAppBasePath + "icon_Profile.svg"} title="User" /></span><span>Lorem Bospioum ispum</span></a></div>
              <div className="icons">
                <a href="#">
                  <img src="images/icon_Search_White.svg" />
                </a>
                <a href="#">
                  <img src={componentAppBasePath + "iconSearchWhite.svg"} alt="notification" />
                </a><a href="#"><img src={componentAppBasePath + "iconSettingsWhite.svg"} alt="settings" /></a>
              </div>

            </div>
            <div className="mobile-menu-links">
              <a href="#" ><span><img src={componentAppBasePath + "iconSettingsWhite.svg"} /></span>HOME</a>
              <a href="#"><span><img src={componentAppBasePath + "iconSettingsWhite.svg"} /></span>AFFILIATES</a>
              <a href="#" className="active"><span><img src={componentAppBasePath + "iconSettingsWhite.svg"} /></span>PLANTS</a>
              <a href="#"><span><img src={componentAppBasePath + "iconSettingsWhite.svg"} /></span>ASSETS</a>
              <a href="#"><span><img src={componentAppBasePath + "iconSettingsWhite.svg"} /></span>EXECUTIVE</a>
              <a href="#"><span><img src={componentAppBasePath + "iconSettingsWhite.svg"} /></span>INFO</a>
            </div>
          </div>
        </div>
        <div className="logoname">ASSET HEALTH CARE</div>
        <div className="middle">
          <div className="navigation"><a href="#" className="active">HOME</a><a href="#">AFFILIATES</a><a href="#">PLANTS</a><a href="#">ASSETS</a><a href="#">EXECUTIVE</a><a href="#">INFO</a>

          </div>
        </div>
        <div className="rightside">
          <div className="icons"> <a href="#"><img src={iconSearch} /></a><a href="#"><img src={iconAlerts} alt="notification" /></a><a href="#">
            <img src={iconSettings} alt="settings" /></a></div>
          <div className="username"><a href="#"><span>
            <img src={iconProfile} title="User" />
          </span><span><i>Welcome </i><i>User</i></span></a></div>
          <div className="logo"><img src={imageSabicLogo} alt="Sabic Logo" /></div>
        </div>

      </div>
    </div>
    // </HeaderParent>
  );
};

export default Header;
