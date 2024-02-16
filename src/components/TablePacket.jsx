import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";

const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Description", dataIndex: "description" },
  { title: "Price", dataIndex: "price" },
  { title: "Data Limit", dataIndex: "data_limit" },
  { title: "Speed", dataIndex: "speed" },
];

const TablePacket = () => {
  const [packageData, setPackageData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/packages");
        const getPackageData = response.data;
        setPackageData(getPackageData);
        console.log(getPackageData);
      } catch (error) {
        console.log("error: ", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={packageData}
        bordered
        footer={() => ""}
      ></Table>
    </div>
  );
};

export default TablePacket;
