import React from "react";
import { Card } from "antd";
import { FundTwoTone } from "@ant-design/icons";

export default function ProductIntroCard({ title, description, description2 }) {
  return (
    <Card
      className="card_title"
      title={title}
      headStyle={{
        fontWeight: "bold",
        fontSize: "30px",
        color: "#endregion",
      }}
      style={{ minWidth: 300 }}
    >
      <p className="data">
        <FundTwoTone /> {description}
      </p>
      <p className="data">
        <FundTwoTone /> {description2}
      </p>
    </Card>
  );
}
