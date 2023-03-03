import React, { useRef } from "react";
import "./AssetMenu.scss"

interface Props {
    buttonName: string;
    onClickHandler: any;

}

const AssetMenu = () => {
    return (
        <div id="asset-menu"><a href="#" className="active">ASSET MODEL</a><a href="#">LIVE TRACKING</a><a href="#">ASSET TIMELINE</a><a href="#">ALERT LIST</a><a href="#">PLOTS</a><a href="#">REFERENCE TABLE</a><a href="#">SPARE PARTS</a></div>

    );
};

export default AssetMenu;