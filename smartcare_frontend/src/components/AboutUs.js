import React from "react";
import image from "../assets/images/b.png";
import AboutUsCard from "./Card/AboutUsCard";

export default function AboutUsComponent() {
  return (
    <div>
      <div className="overview-people">
        <img className="image" src={image} style={{ width: "50%" }} alt="" />
        <div className="text-people">
          <h1 className="intro-long">Nhóm 3</h1>
          <p className="intro-group">Thực hành chuyên sâu</p>
        </div>
      </div>

      <p className="intro-group">Danh sách thành viên</p>
      <div className="detail-person">
        <AboutUsCard name={"Phan Văn Bình"} description={""} />
        <AboutUsCard name={"Phạm Tiến Chượng"} description={""} />
        <AboutUsCard name={"Nguyễn Quang Huy"} description={""} />
        <AboutUsCard name={"Lê Duy Khánh"} description={""} />
        <AboutUsCard name={"Nguyễn Hoàng Yên"} description={""} />
      </div>
    </div>
  );
}
