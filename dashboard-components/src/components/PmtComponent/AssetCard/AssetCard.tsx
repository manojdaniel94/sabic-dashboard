import React, { useRef } from "react";
import "../../../assets/common/PmtDashboard.scss";
import { Table } from "antd";

interface Props {
  data: any[];
}
const AssetCard = ({ data }: Props) => {
  const columns = [
    {
      title: "TIME STAMP",
      dataIndex: "timeStamp",
      key: "timeStamp",
      width: "30%",
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
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{ y: 100 }}
    />
  );
};

export default AssetCard;
