// @ts-nocheck
import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

interface Props {
    buttonName: string;
    onClickHandler: any;
}

let Topdata1 = [
    {
        "localTime": "2020-10-12T01:27:00",
        "assetSapId": "310061001",
        "sensorGroupName": "Main Motor Bearing",
        "power": 3.134,
        "temperature": 41.955,
        "pressure": 27.97
    },
    {
        "localTime": "2022-10-13T01:27:00",
        "assetSapId": "310061001",
        "sensorGroupName": "Main Motor Performance",
        "power": 0.664,
        "temperature": 48.955,
        "pressure": 32.97
    },

    {
        "localTime": "2024-12-22T01:27:00",
        "assetSapId": "310061001",
        "sensorGroupName": "Main Motor Performance",
        "power": 2.3,
        "temperature": 61.7,
        "pressure": 40.3
    },
    {
        "localTime": "2028-12-22T01:27:00",
        "assetSapId": "310061001",
        "sensorGroupName": "Main Motor Performance",
        "power": 1.2,
        "temperature": 24.5,
        "pressure": 15.6
    },
]
const SensorChart = () => {


    useLayoutEffect(() => {
        /* Chart code */
        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        let root = am5.Root.new("chartdiv1");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                focusable: true,
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",
                pinchZoomX: true
            })
        );

        // let easing = am5.ease.linear;
        // chart.get("colors").set("step", 3);

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                maxDeviation: 0.1,
                groupData: false,
                baseInterval: {
                    timeUnit: "day",
                    count: 1
                },
                renderer: am5xy.AxisRendererX.new(root, {}),
                tooltip: am5.Tooltip.new(root, {})
            })
        );

        xAxis.get("renderer").labels.template.set("forceHidden", false);

        function createAxisAndSeries(startValue, opposite, field, name) {
            let yRenderer = am5xy.AxisRendererY.new(root, {
                opposite: opposite
            });
            let yAxis = chart.yAxes.push(
                am5xy.ValueAxis.new(root, {
                    maxDeviation: 1,
                    renderer: yRenderer
                })
            );

            if (chart.yAxes.indexOf(yAxis) > 0) {
                yAxis.set("syncWithAxis", chart.yAxes.getIndex(0));
            }

            // Add series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            let series = chart.series.push(
                am5xy.LineSeries.new(root, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: field,
                    valueXField: "localTime",
                    tooltip: am5.Tooltip.new(root, {
                        pointerOrientation: "horizontal",
                        labelText: "{valueY}"
                    })
                })
            );

            //series.fills.template.setAll({ fillOpacity: 0.2, visible: true });
            series.strokes.template.setAll({ strokeWidth: 1 });

            yRenderer.grid.template.set("strokeOpacity", 0.05);
            yRenderer.labels.template.set("fill", series.get("fill"));
            yRenderer.setAll({
                stroke: series.get("fill"),
                strokeOpacity: 1,
                opacity: 1
            });

            // Set up data processor to parse string dates
            // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
            series.data.processor = am5.DataProcessor.new(root, {
                dateFormat: "yyyy-MM-dd",
                dateFields: ["localTime"]
            });

            series.data.setAll(Topdata1);
        }

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        let cursor = chart.set(
            "cursor",
            am5xy.XYCursor.new(root, {
                xAxis: xAxis,
                behavior: "none"
            })
        );
        cursor.lineY.set("visible", false);


        createAxisAndSeries("100", false, "power", "POWER");
        createAxisAndSeries("100", false, "temperature", "TEMPERATURE");
        createAxisAndSeries("100", false, "pressure", "PRESURRE");

        // legends need to check

        // let legend = chart.rightAxesContainer.children.push(am5.Legend.new(root, {}));
        // legend.data.setAll(chart.series.values);
        // var legend = chart.rightAxesContainer.children.push(am5.Legend.new(root, {
        //     background: am5.Rectangle.new(root, {
        //         stroke: am5.color(0x555555),
        //         fill: am5.color(0xFFFFFF),//Light sky blue
        //         strokeWidth: 1,
        //         maxWidth: 1,
        //     }),
        //     centerX: am5.percent(8),
        //     x: am5.percent(50),
        //     marginRight: 0,
        //     position: "absolute"
        // }));
        // // When legend item container is unhovered, make all series as they are
        // legend.itemContainers.template.events.on("pointerout", function (e) {
        //     var itemContainer = e.target;
        //     var series = itemContainer.dataItem.dataContext;
        // })
        // legend.itemContainers.template.set("width", am5.percent(40));
        // legend.valueLabels.template.setAll({
        //     width: am5.percent(100),
        //     textAlign: "right",
        //     height: 46,
        //     marginRight: 20,
        //     shadowColor: am5.color(0x4e79a7),//Light sky blue

        // });

        // legend.data.setAll(chart.series.values.slice(0, 3));

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        chart.appear(1000, 100);

        // Generates random data, quite different range


        return () => {
            root.dispose();
        };
    }, []);
    return (
        <div className="sensor-plot-graph">
            <div id="chartdiv1" style={{ width: "100%", height: "250px", }}></div>
        </div>
    );
};

export default SensorChart;