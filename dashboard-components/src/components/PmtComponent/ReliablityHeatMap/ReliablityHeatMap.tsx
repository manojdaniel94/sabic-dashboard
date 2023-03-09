import React, { useRef, useState } from "react";
import "../../../assets/common/PmtDashboard.scss";
import imageHeatmap from "../../../assets/images/image_Heatmap.svg";

interface Props {
  statusData: any;
  toolTipData: any[];
  selectedHeatStatus: any;
  setMouseHover: any;
  mouseHover: any;
}

const ReliablityHeatMap = ({
  statusData,
  toolTipData,
  selectedHeatStatus,
  setMouseHover,
  mouseHover,
}: Props) => {
  return (
    <div className="pmt-health-index">
      <div className="pmt-heatmap">
        <img src={imageHeatmap} />
      </div>
      <div className="pmt-heatmapvalues">
        <div className="hi-value1">
          <span
            className="hi-numbers hi-off"
            onMouseOver={() => {
              setMouseHover({
                ...mouseHover,
                over: true,
                statusName: "Asset-off",
              });
            }}
          >
            <div
              className={`hi-popup hi-pos-off ${
                mouseHover.statusName === "Asset-off" &&
                selectedHeatStatus === "Asset-off"
                  ? "show"
                  : "hidden"
              }`}
            >
              <h3>
                HEALTH INDEX{" "}
                <a
                  href="#"
                  className="hi-pop-close"
                  onClick={() =>
                    setMouseHover({
                      ...mouseHover,
                      over: false,
                      statusName: "",
                    })
                  }
                >
                  {" "}
                  X
                </a>
              </h3>
              <div className="hi-popbox">
                {toolTipData.map((item) => (
                  <div className="hi-popuprow">
                    <span>{item.assetId}</span>
                    <span>
                      <i></i>
                      {item.assetHealthIndex}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {selectedHeatStatus === "Asset-off" || selectedHeatStatus === ""
              ? statusData.assetOff.value
              : 0}
          </span>
          <span className="hi-name">Asset-Off</span>
          <span className="hi-status">Off</span>
        </div>
        <div className="hi-value2">
          <span
            className="hi-numbers hi-normal"
            onMouseOver={() => {
              setMouseHover({
                ...mouseHover,
                over: true,
                statusName: "Normal",
              });
            }}
          >
            <div
              className={`hi-popup hi-pos-normal ${
                mouseHover.statusName === "Normal" &&
                selectedHeatStatus === "Normal"
                  ? "show"
                  : "hidden"
              }`}
            >
              <h3>
                HEALTH INDEX{" "}
                <a
                  href="#"
                  className="hi-pop-close"
                  onClick={() =>
                    setMouseHover({
                      ...mouseHover,
                      over: false,
                      statusName: "",
                    })
                  }
                >
                  {" "}
                  X
                </a>
              </h3>
              <div className="hi-popbox">
                {toolTipData.map((item) => (
                  <div className="hi-popuprow">
                    <span>{item.assetId}</span>
                    <span>
                      <i></i>
                      {item.assetHealthIndex}%
                    </span>
                  </div>
                ))}
              </div>
            </div>{" "}
            {selectedHeatStatus === "Normal" || selectedHeatStatus === ""
              ? statusData.warning.value
              : 0}
          </span>
          <span className="hi-name">Normal</span>
          <span className="hi-status">Health Index &gt; 70%</span>
        </div>

        <div className="hi-value3">
          <span
            className="hi-numbers hi-warning"
            onMouseOver={() =>
              setMouseHover({
                ...mouseHover,
                over: true,
                statusName: "Warning",
              })
            }
          >
            <div
              className={`hi-popup hi-pos-warning ${
                mouseHover.statusName === "Warning" &&
                selectedHeatStatus === "Warning"
                  ? "show"
                  : "hidden"
              }`}
            >
              <h3>
                HEALTH INDEX{" "}
                <a
                  href="#"
                  className="hi-pop-close"
                  onClick={() =>
                    setMouseHover({
                      ...mouseHover,
                      over: false,
                      statusName: "",
                    })
                  }
                >
                  {" "}
                  X
                </a>
              </h3>
              <div className="hi-popbox">
                {toolTipData.map((item) => (
                  <div className="hi-popuprow">
                    <span>{item.assetId}</span>
                    <span>
                      <i></i>
                      {item.assetHealthIndex}%
                    </span>
                  </div>
                ))}
              </div>
            </div>{" "}
            {selectedHeatStatus === "Warning" || selectedHeatStatus === ""
              ? statusData.normal.value
              : 0}
          </span>
          <span className="hi-name">Warning</span>
          <span className="hi-status">Health Index &lt; 70%</span>
        </div>

        <div className="hi-value4">
          <span
            className="hi-numbers hi-risk"
            onMouseOver={() =>
              setMouseHover({
                ...mouseHover,
                over: true,
                statusName: "Asset Under Risk",
              })
            }
          >
            <div
              className={`hi-popup hi-pos-risk ${
                mouseHover.statusName === "Asset Under Risk" &&
                selectedHeatStatus === "Asset Under Risk"
                  ? "show"
                  : "hidden"
              }`}
            >
              <h3>
                HEALTH INDEX{" "}
                <a
                  href="#"
                  className="hi-pop-close"
                  onClick={() =>
                    setMouseHover({
                      ...mouseHover,
                      over: false,
                      statusName: "",
                    })
                  }
                >
                  {" "}
                  X
                </a>
              </h3>
              <div className="hi-popbox">
                {toolTipData.map((item) => (
                  <div className="hi-popuprow">
                    <span>{item.assetId}</span>
                    <span>
                      <i></i>
                      {item.assetHealthIndex}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {selectedHeatStatus === "Asset Under Risk" ||
            selectedHeatStatus === ""
              ? statusData.assetUnderRisk.value
              : 0}
          </span>
          <span className="hi-name">Asset Under Risk</span>
          <span className="hi-status">Health Index Under Risk</span>
        </div>
      </div>
    </div>
  );
};

export default ReliablityHeatMap;

//&& selectedHeatStatus === "Asset-off"
//&& selectedHeatStatus === "Normal"
