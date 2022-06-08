import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import { Row, Button, Col, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <AuthLayout>
        <Card style={{ width: "400px" }} className="card">
          <Col>
            <h2>Đăng nhập tài khoản Smartcare</h2>
          </Col>
          <Form layout="vertical">

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

            <Row gutter={[8, 8]} style={{ marginTop: 15 }}>
              <Col>
                <Row>
                  <Link to="/dashboard">
                    <Button
                      className="login-btn"
                      type="primary"
                      shape="round"
                      onClick
                    >
                      Đăng nhập
                    </Button>
                  </Link>
                </Row>
              </Col>
            </Row>
          </Form>
        </Card>
      </AuthLayout>
    </div>
  );
}
