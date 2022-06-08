// import { Layout } from "antd";
import { Link } from "react-router-dom";

export default function HeaderIntro() {
  return (
    <header className="header-intro">
      <div className="header-intro-left">
        <p className="intro-small">#smartcare</p>
        <p className="intro-big">Hệ thống kiểm tra sức khỏe</p>
        <p className="intro-long">
          Hệ thống dự đoán tình trạng sức khỏe dựa trên mô hình học máy.
          Smartcare hi vọng rằng có thể bảo vệ được mọi người từ việc cảnh báo
          những nguy cơ hàng ngày mà bạn có thể mắc phải.
        </p>
        <Link className="evaluate-btn" to="/evaluate">
          Dự đoán ngay
        </Link>
      </div>
      <div className="header-intro-right">
        <div className="">
          <img
            draggable="false"
            src={require("../assets/images/intro.png")}
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="circle1-overlay"></div>
        <div className="circle2-overlay"></div>
        <div className="svg-overlay">
          <svg x="0px" y="0px" viewBox="0 0 1137.5 979.2">
            <path d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389 c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
