import React from "react";
import { Button, Form, InputNumber, Radio } from "antd";
import axios from "../global/axios";

const textStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  paddingLeft: "20px",
  paddingTop: "10px",
}

export default function FormDoctor() {
  function handleSubmit(data) {
    var formData = new FormData();
    for (let name in data) formData.append(name, data[name]);

    axios
      .post("/predict/doctor", formData)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <h1 className="form_intro">PHIẾU ĐIỀN CỦA BÁC SĨ</h1>
      <div>
        <Form layout="vertical" className="form" onFinish={handleSubmit}>
          <Form.Item
            name={'age'}
            rules={[{ required: true, message: 'Hãy chọn BMI của bạn!' }]}
            label={
              <p
                style={textStyle}
              >
                Tuổi bệnh nhân
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
            name={'anaemia'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Giảm hồng cầu hoặc hemoglobin
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
            name={'creatinine_phosphokinase'}
            rules={[{ required: true, message: 'Hãy nhập chỉ số' }]}
            label={
              <p
                style={textStyle}
              >
                Mức độ của enzym CPK trong máu (mcg / L)
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
            name={'diabetes'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Bệnh nhân có bị tiểu đường hay không
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
            name={'ejection_fraction'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Phần trăm máu rời khỏi tim mỗi lần co bóp (%)
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
            name={'high_blood_pressure'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Bệnh nhân có bị huyết áp cao?
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
            name={'platelets'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Số lượng tiểu cầu trong máu (kiloplatelets/mL)
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
            name={'serum_creatinine'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Mức độ creatinine huyết thanh trong máu (mg/dl)
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
            name={'serum_sodium'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Mức natri huyết thanh trong máu (mEq / L)
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
            name={'sex'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Giới tính người bệnh
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
            name={'smoking'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Người bệnh có hút thuốc?
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
            name={'time'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Số lần xét nghiệm
              </p>
            }
            className="form_select"
          >
            <InputNumber
              style={{ width: "100%" }}
              className="form_select_chirlden"
            ></InputNumber>
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
