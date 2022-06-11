import React from "react";
import image from "../assets/images/bacsi.jpg";
import ProductIntroCard from "./Card/ProductIntroCard";

export default function ProductIntro() {
  return (
    <div className="product-intro">
      <div className="header_Product">
        <img src={image} alt="" />
      </div>
      <div className="content_Product">
        <div className="big-title">
          <h1> GIỚI THIỆU ỨNG DỤNG</h1>
        </div>
        <div className="item_intro">
          <ProductIntroCard
            title={"Dự đoán bệnh"}
            description={"Nhanh chóng"}
            description2={"Chính xác"}
          />
          <ProductIntroCard
            title={"Thông tin y khoa"}
            description={"Cập nhật"}
            description2={"Thân thiện"}
          />
          <ProductIntroCard
            title={"Trợ giúp"}
            description={"Chính xác"}
            description2={"Hiệu quả"}
          />
        </div>
      </div>
    </div>
  );
}
