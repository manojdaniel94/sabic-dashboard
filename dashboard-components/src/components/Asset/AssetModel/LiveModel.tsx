import React, { useRef } from "react";

interface Props {
    buttonName: string;
    onClickHandler: any;
}

const LiveModel = () => {
    return (
        <div>
            <div className="right-title">LIVE MODELS</div>
            <div className="right-asset-name">K-1701</div>
            <div className="accordian-title-active">Anomaly Model <span>+</span></div>
            <div className="accordian-body">
                <div className="asset-model-health-index">
                    <div className="amhi-row-title">
                        <div>Model Name</div>
                        <div>Health Index %</div>
                    </div>
                    <div className="amhi-row">
                        <div>Bearing 1</div>
                        <div><span className="uparrow greeny"></span> <span className="amhi-slider"><i className="abefore" style={{ left: 'calc(99% - 35px)' }}>99%</i></span></div>
                    </div>
                    <div className="amhi-row">
                        <div>Bearing 2</div>
                        <div><span className="downarrow redy"></span> <span className="amhi-slider"><i className="aafter" style={{ left: '2%' }}>2%</i></span></div>
                    </div>
                    <div className="amhi-row">
                        <div>Bearing 3</div>
                        <div><span className="downarrow redy"></span> <span className="amhi-slider"><i className="aafter" style={{ left: '33%' }}>33%</i></span></div>
                    </div>
                    <div className="amhi-row">
                        <div>Comp Peformance</div>
                        <div><span className="uparrow greeny"></span> <span className="amhi-slider"><i className="aafter" style={{ left: '60%' }}>60%</i></span></div>
                    </div>
                    <div className="amhi-row">
                        <div>Turbine Performance</div>
                        <div><span className="downarrow redy"></span> <span className="amhi-slider"><i className="aafter" style={{ left: '42%' }}>42%</i></span></div>
                    </div>
                    <div className="amhi-row">
                        <div>Coupling</div>
                        <div><span className="downarrow redy"></span> <span className="amhi-slider"><i className="aafter" style={{ left: '33%' }}>33%</i></span></div>
                    </div>
                    <div className="amhi-row">
                        <div>Dry Gas Seal1</div>
                        <div><span className="uparrow greeny"></span> <span className="amhi-slider"><i className="abefore" style={{ left: 'calc(85% - 35px)' }}>85%</i></span></div>
                    </div><div className="amhi-row">
                        <div>Bearing 1</div>
                        <div><span className="uparrow greeny"></span> <span className="amhi-slider"><i className="abefore" style={{ left: 'calc(99% - 35px)' }}>99%</i></span></div>
                    </div>
                    <div className="amhi-row">
                        <div>Bearing 2</div>
                        <div><span className="downarrow redy"></span> <span className="amhi-slider"><i className="aafter" style={{ left: '2%' }}>2%</i></span></div>
                    </div>
                </div>
            </div>
            <div className="accordian-title">Failure Prediction <span>-</span></div>
            <div className="accordian-body">
                <div className="asset-model-failure-prediction">
                    <div className="amfp-row-title">
                        <div>MODEL NAME</div>
                        <div>RUL</div>
                        <div>CONFIDENCE FACTOR</div>
                    </div>
                    <div className="amfp-row">
                        <div>Bearing 1</div>
                        <div>5</div>
                        <div>22</div>
                    </div>
                    <div className="amfp-row">
                        <div>Bearing 2</div>
                        <div>15</div>
                        <div>62</div>
                    </div>
                    <div className="amfp-row">
                        <div>Bearing 3</div>
                        <div>11</div>
                        <div>2</div>
                    </div>
                    <div className="amfp-row">
                        <div>Bearing 4</div>
                        <div>15</div>
                        <div>62</div>
                    </div>
                    <div className="amfp-row">
                        <div>Bearing 5</div>
                        <div>11</div>
                        <div>2</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LiveModel;