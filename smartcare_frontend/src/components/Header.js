import { Layout } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Layout.Header>
      <div className="header-left">
        <div className="header-logo">
          <img
            draggable="false"
            src={require("../assets/images/logo.svg").default}
            alt=""
          />
        </div>
      </div>
      <div className="nav">
        <ul>
          <li className="active">
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/blog">Tin tức</Link>
          </li>
          <li>
            <Link to="/doctor">Dự đoán</Link>
          </li>
        </ul>
      </div>

      <div className="header-right">
        <Link className="link-login" to="/login">
          Login
        </Link>
        <Link className="link-register" to="/register">
          Register
        </Link>
      </div>
    </Layout.Header>
  );
}
