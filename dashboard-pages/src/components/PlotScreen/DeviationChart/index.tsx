
// @ts-nocheck
import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

interface Props {
    plotData: any;
}

let Topdata = [
    {
        "localTime": "2020-10-12T01:27:00",
        "assetSapId": "310061001",
        "sensorGroupName": "Main Motor Bearing",
        "distance": 3.134,
        "alertThreshold": 41.955,
        "warningThreshold": 27.97,
        "status": "Normal"
    },
    {
        "localTime": "2020-10-13T01:27:00",
        "assetSapId": "310061001",
        "sensorGroupName": "Main Motor Performance",
        "distance": 6.664,
        "alertThreshold": 55.955,
        "warningThreshold": 46.97,
        "status": "Poor data"
    },
    {
        "localTime": "2020-10-14T01:27:00",
        "assetSapId": "310061001",
        "sensorGroupName": "Mixer Gearbox Bearing",
        "distance": 3.569,
        "alertThreshold": 28.955,
        "status": "warning"
    },
    {
        "localTime": "2021-10-15T01:27:00",
        "assetSapId": "310061001",
        "sensorGroupName": "Mixer Bearing",
        "distance": 7.653,
        "alertThreshold": 66.955,
        "warningThreshold": 45.97,
        "status": "AssetOff"
    },
    {
        "localTime": "2022-10-16T01:27:00",
        "assetSapId": "310061001",
        "sensorGroupName": "Gear Pump Motor Bearing",
        "distance": 10.186,
        "alertThreshold": 22.955,
        "warningThreshold": 27.97,
        "status": "Pi disconnection"
    },


]
const DeviationChart = ({ plotData }: Props) => {

    useLayoutEffect(() => {
        if (plotData.length > 0) {
            console.log('hii')

            // let Topdata = [...deviation]

            // let Topdata = []
            // plotData.forEach((device, index) => {
            //     Topdata[index] = { ...device }
            // })

            const root = am5.Root.new("chartdiv");

            root.setThemes([
                am5themes_Animated.new(root)
            ]);
            var container = root.container.children.push(am5.Container.new(root, {
                width: am5.percent(100),
                height: am5.percent(140),
                layout: root.verticalLayout
            }));



            let chart1 = container.children.push(
                am5xy.XYChart.new(root, {
                    width: am5.percent(95),
                    height: am5.percent(100),
                    panX: false,
                    panY: false,
                    wheelY: "zoomX",
                    layout: root.verticalLayout,
                    pinchZoomX: true,
                })
            );
            chart1.get("colors").set("colors", [
                am5.color(0xE35205),//red
                am5.color(0xFFCD00),//yellow
                //am5.color(0x0047bb),//blue
                am5.color(0x009fdf),//sky blue
                am5.color(0x2eb541), //green
                am5.color(0x4e79a7),//Light sky blue
                am5.color(0x939598),//Gray


            ]);

            var XAxis1 = chart1.xAxes.push(am5xy.DateAxis.new(root, {
                groupData: true,
                width: am5.percent(80),
                height: am5.percent(120),
                marginTop: 55,
                maxDeviation: 0.5,
                startLocation: 1,
                endLocation: 3,
                baseInterval: { timeUnit: "minute", count: 15 },
                markUnitChange: true,
                renderer: am5xy.AxisRendererX.new(root, {
                    minGridDistance: 50, pan: "zoom",
                })
            }));

            let YAxis1 = chart1.yAxes.push(am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {})
            }));
            YAxis1.get("renderer").labels.template.set("forceHidden", false);
            XAxis1.get("renderer").labels.template.set("forceHidden", false);



            function createSeries(name, field) {

                let Series1 = chart1.series.push(
                    am5xy.LineSeries.new(root, {
                        name: name,
                        height: am5.percent(100),
                        width: am5.percent(95),
                        marginRight: 40,
                        paddingRight: 20,
                        xAxis: XAxis1,
                        yAxis: YAxis1,
                        valueYField: field,
                        valueXField: "localTime",

                        tooltip: am5.Tooltip.new(root, {
                            pointerOrientation: "horizontal",
                            labelText: "{name}"
                        })
                    })
                );
                Series1.strokes.template.set("templateField", "strokeSettings");
                Series1.strokes.template.setAll({ strokeWidth: 3 });

                Series1.data.processor = am5.DataProcessor.new(root, {
                    dateFormat: "yyyy-MM-dd",
                    dateFields: ["localTime"]
                });

                Series1.data.setAll(Topdata);


                chart1.set("cursor", am5xy.XYCursor.new(root, {
                    behavior: "zoomXY",
                    xAxis: XAxis1
                }));
            }

            createSeries("Alert", "alertThreshold");
            createSeries("Warning", "warningThreshold");
            createSeries("Distance", "distance");


            let legend1 = chart1.children.push(am5.Legend.new(root, {
                centerX: am5.percent(50),
                x: am5.percent(50),
                y: am5.percent(130),
                useDefaultMarker: true
            }));
            legend1.valueLabels.template.setAll({
                width: am5.percent(100),
                textAlign: "center",
                shadowColor: am5.color(0x4e79a7),//Light sky blue

            });
            let status = ["Normal", "Asset off", "Poor data/State Change/Pi Data disconnection"];
            for (let i = 0; i < status.length; i++) {
                var series = chart1.series.push(
                    am5xy.ColumnSeries.new(root, {
                        name: status[i],
                        xAxis: XAxis1,
                        yAxis: YAxis1,
                        valueYField: "value",
                        categoryXField: "category",
                        tooltip: am5.Tooltip.new(root, {})
                    })
                );

                series.columns.template.setAll({
                    templateField: "settings"
                });
            }
            legend1.markerRectangles.template.setAll({
                cornerRadiusTL: 0,
                cornerRadiusTR: 0,
                cornerRadiusBL: 0,
                cornerRadiusBR: 0
            });

            legend1.labels.template.setAll({
                fontSize: 17,
                //fontWeight: "700"
            });
            var seri = chart1.series.values;
            legend1.data.setAll(seri.slice(0, 2).concat(seri.slice(3, 6)));

            var legend = chart1.rightAxesContainer.children.push(am5.Legend.new(root, {
                background: am5.Rectangle.new(root, {
                    stroke: am5.color(0x555555),
                    fill: am5.color(0xFFFFFF),//Light sky blue
                    strokeWidth: 1,
                    maxWidth: 1,
                }),
                centerX: am5.percent(8),
                x: am5.percent(50),
                marginRight: 0,
                position: "absolute"
            }));
            // When legend item container is unhovered, make all series as they are
            legend.itemContainers.template.events.on("pointerout", function (e) {
                var itemContainer = e.target;
                var series = itemContainer.dataItem.dataContext;
            })
            legend.itemContainers.template.set("width", am5.percent(40));
            legend.valueLabels.template.setAll({
                width: am5.percent(100),
                textAlign: "right",
                height: 46,
                marginRight: 20,
                shadowColor: am5.color(0x4e79a7),//Light sky blue

            });

            legend.data.setAll(chart1.series.values.slice(0, 3));

            let Chart2 = container.children.push(am5xy.XYChart.new(root, {
                width: am5.percent(93),
                marginBottom: 90,
                marginTop: -190
                // panX: true,
                // panY: true,     
                // wheelX: "panX",
                // wheelY: "zoomX",
                // pinchZoomX: true,
                // layout: root.verticalLayout,
            }));
            var xRenderer = am5xy.AxisRendererX.new(root, {
                minGridDistance: 50,
            });

            xRenderer.labels.template.setAll({
                // rotation: -90,
                // marginLeft:50,
                centerY: am5.p100,
                centerX: am5.p100
            });
            xRenderer.grid.template.setAll({
                location: 11.5,
                strokeDasharray: [1, 5]
            });

            Chart2.get("colors").set("colors", [

                am5.color(0xE35205), //red
                am5.color(0xFFCD00),  //yellow
                //am5.color(0x009FDF),      //blue
                am5.color(0x2eb541), //green
            ]);


            let data = [];
            // 
            for (var i = 0; i < Topdata.length; i++) {

                if (Topdata[i].status === "AssetOff" || Topdata[i].status === "state change") {
                    let localdata = {
                        category: "",
                        from: new Date(Topdata[i].localTime).getTime(),
                        to: Topdata[i + 1] == undefined ? new Date(Topdata[i].localTime).getTime() : new Date(Topdata[i + 1].localTime).getTime(),
                        columnSettings: {
                            fill: am5.color(0x4e79a7)//Light sky blue        
                        }
                    };
                    data.push(localdata);
                }
                else if (Topdata[i].status === "Pi disconnection" || Topdata[i].status === "Poor data" || Topdata[i].status === "Pi Data Disconnection") {
                    let localdata = {
                        category: "",
                        from: new Date(Topdata[i].localTime).getTime(),
                        to: Topdata[i + 1] == undefined ? new Date(Topdata[i].localTime).getTime() : new Date(Topdata[i + 1].localTime).getTime(),
                        columnSettings: {
                            fill: am5.color(0x939598)//Grey       
                        }
                    };
                    data.push(localdata);
                }
                else if (Topdata[i].status === "warning") {
                    let localdata = {
                        category: "",
                        from: new Date(Topdata[i].localTime).getTime(),
                        to: Topdata[i + 1] == undefined ? new Date(Topdata[i].localTime).getTime() : new Date(Topdata[i + 1].localTime).getTime(),
                        columnSettings: {
                            fill: am5.color(0xFFCD00)//Orange        
                        }
                    };
                    data.push(localdata);
                }
                else if (Topdata[i].status === "alert") {
                    let localdata = {
                        category: "",
                        from: new Date(Topdata[i].localTime).getTime(),
                        to: Topdata[i + 1] == undefined ? new Date(Topdata[i].localTime).getTime() : new Date(Topdata[i + 1].localTime).getTime(),
                        columnSettings: {
                            fill: am5.color(0xE35205)//red       
                        }
                    };
                    data.push(localdata);
                }
                else if (Topdata[i].status === "Normal" || Topdata[i].status === "Asset on") {
                    let localdata = {
                        category: "",
                        from: new Date(Topdata[i].localTime).getTime(),
                        to: Topdata[i + 1] == undefined ? new Date(Topdata[i].localTime).getTime() : new Date(Topdata[i + 1].localTime).getTime(),
                        columnSettings: {
                            fill: am5.color(0x2eb541)//green     
                        }
                    };
                    data.push(localdata);
                }

            }
            let YAxis2 = Chart2.yAxes.push(am5xy.CategoryAxis.new(root, {
                categoryField: "category",
                marginLeft: YscalePositionSet(10),
                renderer: am5xy.AxisRendererY.new(root, {})
            }));

            function YscalePositionSet(val) {
                let count = 0;
                if (val !== undefined) {
                    let temp1 = val.toString().split(".")[0];
                    let temp2 = val.toString().split(".")[1];
                    if (temp1 !== undefined)
                        for (let index = 0; index < temp1.length; index++) {
                            count++;
                        }
                    if (temp2 !== undefined)
                        for (let index = 0; index < temp2.length; index++) {
                            if (temp2[index] != 0) {
                                count++;
                                break;
                            }
                            else
                                count++;
                        }
                }
                else {
                    count++;
                }
                return count * 10;
            }

            YAxis2.data.setAll([{ category: "" }]);
            YAxis2.get("renderer").labels.template.set("forceHidden", false);

            let XAxis2 = chart1.xAxes.push(am5xy.DateAxis.new(root, {
                groupData: true,
                //height:am5.percent(40),
                width: am5.percent(80),
                // marginBottom: 20,
                startLocation: 1,
                endLocation: 3,
                marginTop: 0,
                maxDeviation: 0.5,
                baseInterval: { timeUnit: "minute", count: 15 },
                renderer: xRenderer,
            }));
            XAxis2.get("renderer").labels.template.set("forceHidden", true);

            let Series2 = Chart2.series.push(am5xy.ColumnSeries.new(root,
                {
                    name: "displayName",
                    xAxis: XAxis2,
                    width: am5.percent(100),
                    // height:am5.percent(40),
                    marginBottom: 0,
                    yAxis: YAxis2,
                    valueXField: "to",
                    openValueXField: "from",
                    categoryYField: "category",
                    position: "absolute"
                }));


            Series2.columns.template.setAll({
                strokeWidth: 0,
                strokeOpacity: 0,
                height: am5.percent(20),
                templateField: "columnSettings",
                position: "absolute"
            });
            //legend.data.push(Series2);

            Series2.data.setAll(data);



            Chart2.appear(1000, 100);

            // series0.appear(1000);
            // series1.appear(1000);
            // chart.appear(1000, 100);
            return () => {
                root.dispose();
            };
        }
    }, [plotData]);
    return (
        <div id="sensor-plot-left">
            <div id="deviation-plot">
                <div className="sensor-filter">
                    <div className="title">DEVIATION PLOT</div>
                </div>
                <div className="asset-name">K-1701</div>
                <div className="sensor-plot-graph">
                    <div id="chartdiv" style={{ width: "80%", height: "350px", }}></div>
                </div>
            </div>

        </div>

    );
};

export default DeviationChart;
