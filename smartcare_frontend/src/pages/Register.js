import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import { Row, Button, Col, Card, Form, Input } from "antd";
import axios from "../global/axios";
import { useNavigate } from "react-router-dom";

export default function Register(props) {
  const navigate = useNavigate();

  function postRegister(data) {
    var formData = new FormData();
    for (let name in data) formData.append(name, data[name]);

    axios
      .post("/register", formData)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <AuthLayout>
        <Card style={{ width: "400px" }} className="card">
          <Col>
            <h2>Đăng ký tài khoản Smartcare</h2>
          </Col>
          <Form layout="vertical" onFinish={postRegister}>
            <Form.Item
              label="Tên người dùng"
              name="username"
              rules={[{ required: true, message: "Username is required" }]}
              style={{ marginBottom: 15 }}
            >
              <Input
                name="username"
                shape="round"
                type="text"
                style={{ width: "100%" }}
              />
            </Form.Item>

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

            <Form.Item
              label="Nhập lại mật khẩu"
              name="password_confirm"
              rules={[
                { required: true, message: "Password confirm is required" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
              style={{ marginBottom: 15 }}
            >
              <Input.Password shape="round" name="password_confirm" />
            </Form.Item>

            <Row gutter={[8, 8]} style={{ marginTop: 15 }}>
              <Col>
                <Row>
                  <Button
                    htmlType="submit"
                    className="login-btn"
                    type="primary"
                    shape="round"
                  >
                    Đăng ký
                  </Button>
                </Row>
              </Col>
            </Row>
          </Form>
        </Card>
      </AuthLayout>
    </div>
  );
}
