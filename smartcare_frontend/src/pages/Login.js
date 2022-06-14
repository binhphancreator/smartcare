import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import { Row, Button, Col, Card, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "../global/axios";

export default function Login() {
  const navigate = useNavigate();

  function Login(data) {
    var formData = new FormData();
    for (let name in data) formData.append(name, data[name]);

    axios
      .post("/login", formData)
      .then((res) => {
        if (res.data === "Register successfully") {
          setTimeout(() => {
            navigate("/");
          }, 1000)
          //log ui success
        } else {
          console.log("err login")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <AuthLayout>
        <Card className="card">
          <Col>
            <div className="card-auth-logo"><Link to='/'><img draggable="false" src={require("../assets/images/logo.svg").default} alt="" /></Link></div>
            <h2 className="card-auth-title">Đăng nhập</h2>
          </Col>
          <Form layout="vertical" onFinish={Login}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Must be in email format" },
              ]}
              style={{ marginBottom: 15 }}
            >
              <Input
                name="email"
                shape="round"
                type="email"
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
              style={{ marginBottom: 15 }}
            >
              <Input.Password shape="round" name="password" />
            </Form.Item>

            <div className="card-auth-buttons">
              <Button htmlType="submit" className="login-btn" type="primary" shape="round"> Đăng nhập </Button>
            </div>
          </Form>
        </Card>
      </AuthLayout>
    </div>
  );
}
