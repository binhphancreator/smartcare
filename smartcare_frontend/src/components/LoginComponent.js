import React from 'react'
import { Row, Divider, Layout, Button, PageHeader, Col, Card, Form, Input, } from 'antd';
import { VideoCameraFilled, GithubOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom'

export default function LoginComponent() {
    return (
        <div>
            <div className="background">
                <div className="form">
                    <div className="main_right">

                    </div>
                    <div className="main_left">
                        <Card className="card">
                            <Col >
                                <h2>Login Form</h2>
                            </Col>
                            <Form layout="vertical">
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: 'Email is required' },
                                        { type: 'email', message: 'Must be in email format' },
                                    ]}
                                    style={{ marginBottom: 15, }}
                                >
                                    <Input name="email"  shape="round" type="email" style={{width:"300px"}} />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Password is required' }]}
                                    style={{ marginBottom: 15 }}
                                >
                                    <Input.Password shape="round" name="password" />
                                </Form.Item>

                                <Row gutter={[8, 8]} style={{ marginTop: 15 }} >
                                    <Col>
                                        <Row>
                                            <Link to="/dashboard">
                                                <Button className="login-btn" type="primary" shape="round" onClick  >LOGIN</Button></Link>
                                        </Row>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>


                    </div>
                </div>
            </div>
        </div>
    )
}
