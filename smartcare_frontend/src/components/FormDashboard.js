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

  function handleSubmit(data) {
    console.log(data)
    // axios
    //   .post("/login", formData)
    //   .then((res) => {
    //     if (res.data === "Register successfully") {
    //       setTimeout(() => {
    //         navigate("/");
    //       }, 1000)
    //       //log ui success
    //     } else {
    //       console.log("err login")
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }


  return (
    <div className="dashboard">
      <div>
        <h1 className="form_intro">PHIẾU ĐIỀN PHỎNG VẤN</h1>
        <Form layout="vertical" className="form" onFinish={handleSubmit}>
          <Form.Item
            name={'1'}
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
            name={'2'}
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
            name={'3'}
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
            name={'4'}
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
            name={'5'}
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
                  <Select.Option key={item} value={item} className="form_select_chirlden">
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name={'6'}
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
                  <Select.Option key={item} value={item} className="form_select_chirlden">
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name={'7'}
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
            name={'8'}
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
            name={'9'}
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn thuộc nhóm tuổi nào
              </p>
            }
            className="form_select"
          >
            <Select>
              <Select.Option value={0} className="form_select_chirlden">
                18-24
              </Select.Option>
              <Select.Option value={1} className="form_select_chirlden">
                25-29
              </Select.Option>
              <Select.Option value={2} className="form_select_chirlden">
                30-34
              </Select.Option>
              <Select.Option value={3} className="form_select_chirlden">
                35-39
              </Select.Option>
              <Select.Option value={4} className="form_select_chirlden">
                40-44
              </Select.Option>
              <Select.Option value={5} className="form_select_chirlden">
                45-49
              </Select.Option>
              <Select.Option value={6} className="form_select_chirlden">
                50-54
              </Select.Option>
              <Select.Option value={7} className="form_select_chirlden">
                55-59
              </Select.Option>
              <Select.Option value={8} className="form_select_chirlden">
                60-64
              </Select.Option>
              <Select.Option value={9} className="form_select_chirlden">
                65-69
              </Select.Option>
              <Select.Option value={10} className="form_select_chirlden">
                70-74
              </Select.Option>
              <Select.Option value={11} className="form_select_chirlden">
                75-79
              </Select.Option>
              <Select.Option value={12} className="form_select_chirlden">
                Trên 80 tuổi
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={'10'}
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
                Anh-Điêng
              </Select.Option>
              <Select.Option value={1} className="form_select_chirlden">
                Châu Á
              </Select.Option>
              <Select.Option value={2} className="form_select_chirlden">
                Châu Phi
              </Select.Option>
              <Select.Option value={3} className="form_select_chirlden">
                gốc Tây Ban Nha
              </Select.Option>
              <Select.Option value={5} className="form_select_chirlden">
                Châu Âu
              </Select.Option>
              <Select.Option value={4} className="form_select_chirlden">
                Khác...
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={'11'}
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
            name={'12'}
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
            name={'13'}
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
                return <Select.Option key={item} value={item}>{item} </Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name={"14"}
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
                return <Select.Option key={item} value={item}>{item} </Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name={"15"}
            label={
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Bạn có từng bị bệnh suyễn?
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
            name={"16"}
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
            name={"17"}
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

          <Button
            htmlType="submit"
            type="primary"
            shape="round"
            style={{ width: "120px", height: "40px " }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
