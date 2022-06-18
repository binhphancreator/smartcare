import React, { useState } from "react";
import { Button, Form, InputNumber, Modal, Radio } from "antd";
import axios from "../global/axios";
import { useNavigate } from "react-router-dom";

const textStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  paddingLeft: "20px",
  paddingTop: "10px",
}

export default function FormDoctor() {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [predictData, setPredictData] = useState(0)

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    navigate('/')
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function handleSubmit(data) {
    var formData = new FormData();
    for (let name in data) formData.append(name, data[name]);

    axios
      .post("/predict/doctor", formData)
      .then((res) => {
        if (res.data.status === 200) {
          showModal()
          setPredictData(res.data.data)
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
          <Modal title="Kết quả dự đoán của bác sĩ" visible={isModalVisible} onOk={handleOk} okText={"Trở về trang chủ"} onCancel={handleCancel} cancelText={"Đóng"}>
            <p>Với những thông tin mà bạn đã nhập</p>
            <p>Máy tính dự đoán bạn có {predictData}% khả năng có bệnh về tim mạch</p>
          </Modal>
          <Form.Item
            name={'age'}
            rules={[{ required: true, message: 'Hãy vào trường thông tin dưới!' }]}
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
            name={'currentSmoker'}
            rules={[{ required: true, message: 'Hãy chọn một câu trả lời!' }]}
            label={
              <p
                style={textStyle}
              >
                Bệnh nhân có hút thuốc lá hay không?
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
            name={'cigsPerDay'}
            rules={[{ required: true, message: 'Hãy nhập số lượng!' }]}
            label={
              <p
                style={textStyle}
              >
                Số lượng thuốc lá bệnh nhân tiêu thụ (điếu/ngày)
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
            name={'BPMeds'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Bệnh nhân có dùng thuốc điều trị bệnh huyết áp?
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
            name={'prevalentStroke'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Bệnh nhân có từng bị đột quỵ?
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
            name={'prevalentHyp'}
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
            name={'diabetes'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
              >
                Bệnh nhân có mắc chứng tiểu đường?
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
            name={'totChol'}
            rules={[{ required: true, message: 'Điền số liệu vào trường thông tin!' }]}
            label={
              <p
                style={textStyle}
              >
                Lượng cholesterol trong máu (mg/dl)
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
            name={'sysBP'}
            rules={[{ required: true, message: 'Điền số liệu vào trường thông tin!' }]}
            label={
              <p
                style={textStyle}
              >
                Huyết áp người bệnh (mmHg)
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
            name={'diaBP'}
            rules={[{ required: true, message: 'Điền vào trường thông tin bên dưới!' }]}
            label={
              <p
                style={textStyle}
              >
                Huyết áp tâm trương (mmHg)
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
            name={'BMI'}
            rules={[{ required: true, message: 'Điền vào trường thông tin bên dưới!' }]}
            label={
              <p
                style={textStyle}
              >
                Chỉ số BMI
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
            name={'heartRate'}
            rules={[{ required: true, message: 'Điền vào trường thông tin bên dưới!' }]}
            label={
              <p
                style={textStyle}
              >
                Nhịp tim (nhịp/phút)
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
            name={'glucose'}
            rules={[{ required: true, message: 'Điền vào trường thông tin bên dưới!' }]}
            label={
              <p
                style={textStyle}
              >
                Chỉ số đường huyết
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
