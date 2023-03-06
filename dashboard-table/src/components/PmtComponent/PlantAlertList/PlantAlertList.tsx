import React, { useRef } from "react";
import '../../../assets/common/PmtDashboard.scss'
import { Table } from "antd";



interface Props {
    data: any[];
}
const PlantAlertList = ({ data }: Props) => {

    const columns = [
        {
            title: "TIME STAMP",
            dataIndex: "timeStamp",
            key: "timeStamp",
            width: "30%",
        },
        {
            title: "ASSET ID",
            dataIndex: "assetId",
            key: "assetId",
            width: "15%",
        },

        {
            title: "ALERT DESCRIPTION",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "ALERT STATUS",
            dataIndex: "status",
            key: "status",
            width: "20%",

            render: (status: any) => (
                <span style={{ color: status === "Active" ? "red" : "green" }}>
                    {status}
                </span>
            ),
        },
    ];


    return (
        <div id="pmt-alert-list">
            <div className="pmt-filter">
                <div className="pmt-title">PMT ALERT LIST</div>
            </div>
            <div className="pmt-asset-name">Polly 2</div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ y: 100 }}
            />
        </div>
    );
};

export default PlantAlertList;