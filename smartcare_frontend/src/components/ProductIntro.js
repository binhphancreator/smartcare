import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import Icon, { FundTwoTone, MedicineBoxTwoTone } from "@ant-design/icons";

import image from "../assets/images/bacsi.jpg";
export default function ProductIntro() {
  return (
    <div className="product-intro">
      <div className="header_Product">
        <img src={image} />
      </div>
      <div className="content_Product">
        <div className="big-title">
          <h1> GIỚI THIỆU ỨNG DỤNG</h1>
        </div>
        <div className="item_intro">
          <Card
            className="card_title"
            title="Dự đoán bệnh"
            headStyle={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#endregion",
            }}
            style={{ width: 300 }}
          >
            <p className="data">
              <FundTwoTone /> Nhanh chóng{" "}
            </p>
            <p className="data">
              <FundTwoTone /> Chính xác
            </p>
          </Card>
          <Card
            className="card_title"
            title="Thông tin y khoa"
            headStyle={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#endregion",
            }}
            style={{ width: 300 }}
          >
            <p className="data">
              {" "}
              <FundTwoTone className="icon" /> Cập nhật
            </p>
            <p className="data">
              <FundTwoTone /> Thân thiện
            </p>
          </Card>
          <Card
            className="card_title"
            title="Trợ giúp"
            headStyle={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#endregion",
            }}
            style={{ width: 300 }}
          >
            <p className="data">
              {" "}
              <FundTwoTone className="icon" /> Chính xác
            </p>
            <p className="data">
              {" "}
              <FundTwoTone /> Hiệu quả
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
