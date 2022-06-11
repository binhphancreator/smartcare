import React from "react";
import { useState } from "react";
import { Button, Form, InputNumber, Radio, Select } from "antd";

export default function FormDashboard() {
  function createrange(range) {
    let arr = [];
    for (let i = 1; i <= range; i++) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <div className="dashboard">
      <div>
        <h1 className="form_intro">PHIẾU ĐIỀN PHỎNG VẤN</h1>
        <Form layout="vertical" className="form">
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Chỉ số BMI của bạn là bao nhiêu?
              </p>
            }
            className="form_select"
          >
            <InputNumber
              style={{ width: "100%" }}
              className="form_select_chirlden"
            ></InputNumber>
          </Form.Item>

          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn có thói quen hút thuốc không?
              </p>
            }
            className="form_select"
          >
            <Radio.Group className="form_select_chirlden">
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn có thói quen uống rượt bia không?
              </p>
            }
            className="form_select"
          >
            <Radio.Group className="form_select_chirlden">
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn đã bao giờ bị ngất? (đột quỵ)?
              </p>
            }
            className="form_select"
          >
            <Radio.Group className="form_select_chirlden">
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Hãy ước lượng trong vòng 30 ngày trở lại đây, từng có bao nhiêu
                ngày bạn cảm thấy không khoẻ?
              </p>
            }
            className="form_select"
          >
            <Select>
              {createrange(30).map((item, key) => {
                return (
                  <Select.Option value={item} className="form_select_chirlden">
                    {item}{" "}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Hãy ước lượng trong vòng 30 ngày trở lại đây, từng có bao nhiêu
                ngày tinh thần bạn không tốt?
              </p>
            }
            className="form_select"
          >
            <Select>
              {createrange(30).map((item, key) => {
                return (
                  <Select.Option value={item} className="form_select_chirlden">
                    {item}{" "}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn có gặp khó khăn khi đi lại hoặc leo cầu thang?
              </p>
            }
            className="form_select"
          >
            <Radio.Group className="form_select_chirlden">
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn thuộc phái nam hay nữ?
              </p>
            }
            className="form_select"
          >
            <Radio.Group className="form_select_chirlden">
              <Radio value={1}> Nam </Radio>
              <Radio value={0}> Nữ </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Sắc tộc của bạn là gì?
              </p>
            }
            className="form_select"
          >
            <Select>
              <Select.Option value={0} className="form_select_chirlden">
                Anh-Điêng{" "}
              </Select.Option>
              <Select.Option value={1} className="form_select_chirlden">
                Châu Á{" "}
              </Select.Option>
              <Select.Option value={2} className="form_select_chirlden">
                Châu Phi{" "}
              </Select.Option>
              <Select.Option value={3} className="form_select_chirlden">
                gốc Tây Ban Nha{" "}
              </Select.Option>
              <Select.Option value={5} className="form_select_chirlden">
                Châu Âu
              </Select.Option>
              <Select.Option value={4} className="form_select_chirlden">
                Khác...{" "}
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn đã từng bị tiểu đường chưa?
              </p>
            }
            className="form_select"
          >
            <Radio.Group className="form_select_chirlden">
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn có thói quen tập thể dục?
              </p>
            }
            className="form_select"
          >
            <Radio.Group className="form_select_chirlden">
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Nhìn chung sức khoẻ của bạn như thế nào?
              </p>
            }
            className="form_select"
          >
            <Select>
              {createrange(4).map((item, key) => {
                return <Select.Option value={item}>{item} </Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Một ngày bạn ngủ bao nhiêu giờ?
              </p>
            }
            className="form_select"
          >
            <Select>
              {createrange(24).map((item, key) => {
                return <Select.Option value={item}>{item} </Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn đã từng bị tiểu đường chưa?
              </p>
            }
            className="form_select"
          >
            <Radio.Group className="form_select_chirlden">
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn có từng bị bệnh thận? (không bao gồm sỏi, nhiễm trùng)
              </p>
            }
            className="form_select"
          >
            <Radio.Group className="form_select_chirlden">
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn có từng bị ung thư da?
              </p>
            }
            className="form_select"
          >
            <Radio.Group className="form_select_chirlden">
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item className="submit">
            <Button
              type="primary"
              shape="round"
              style={{ width: "120px", height: "40px " }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
