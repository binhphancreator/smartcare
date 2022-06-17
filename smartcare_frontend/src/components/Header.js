import { Button, Layout } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
  const isLogin = localStorage.getItem('token') !== null
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
        {!isLogin ?
          <>
            <Link className="link-login" to="/login">
              Đăng nhập
            </Link>
            <Link className="link-register" to="/register">
              Đăng kí
            </Link>
          </> :
          <Button type="primary" onClick={() => {
            localStorage.removeItem('token')
            window.location.reload()
          }}>
            Đăng xuất
          </Button>
        }
      </div>
    </Layout.Header>
  );
}
