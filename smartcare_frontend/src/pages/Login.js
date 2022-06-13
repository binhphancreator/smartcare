import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import { Row, Button, Col, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <AuthLayout>
        <Card className="card">
          <Col>
            <div className="card-auth-logo"><Link to='/'><img draggable="false" src={require("../assets/images/logo.svg").default} alt=""/></Link></div>
            <h2 className="card-auth-title">Đăng nhập</h2>
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

            <div className="card-auth-buttons">
              <Button className="login-btn" type="primary" shape="round"> Đăng nhập </Button>
            </div>
          </Form>
        </Card>
      </AuthLayout>
    </div>
  );
}
