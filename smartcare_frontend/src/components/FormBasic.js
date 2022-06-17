import React, { useState } from "react";
import { Button, Form, InputNumber, Modal, Radio, Select } from "antd";
import axios from "../global/axios";
import { useNavigate } from "react-router-dom";

const textStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  paddingLeft: "20px",
  paddingTop: "10px",
}

export default function FormBasic() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('token') !== null
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [predictData, setPredictData] = useState(0)

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (isLogin) {
      navigate('/predict/doctor')
    } else {
      navigate('/login')
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function createrange(range) {
    let arr = [];
    for (let i = 0; i <= range; i++) {
      arr.push(i);
    }
    return arr;
  }

  function handleSubmit(data) {
    var formData = new FormData();
    for (let name in data) formData.append(name, data[name]);

    axios
      .post("/predict", formData)
      .then((res) => {
        if (res.data.status === 200) {
          showModal()
          setPredictData(res.data.data)
          console.log(res.data.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <h1 className="form_intro">PHIẾU ĐIỀN PHỎNG VẤN</h1>
      <div style={{ paddingBottom: '120px' }}>
        <Modal title="Kết quả dự đoán nhanh" visible={isModalVisible} onOk={handleOk} okText={!isLogin ? "Đăng nhập" : "Dự đoán chi tiết"} onCancel={handleCancel} cancelText={"Đóng"}>
          <p>Với những thông tin mà bạn đã nhập</p>
          <p>Máy tính dự đoán bạn có {predictData}% khả năng có bệnh về tim mạch</p>
          {!isLogin ? <p>Đăng nhập ngay để sử dụng form dự đoán chi tiết hơn!</p> : <p>Bạn có muốn sử dụng form dự đoán chi tiết hơn?</p>}
        </Modal>
        <Form layout="vertical" className="form" onFinish={handleSubmit}>
          <Form.Item
            name={'BMI'}
            rules={[{ required: true, message: 'Hãy chọn BMI của bạn!' }]}
            label={
              <p
                style={textStyle}
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
            name={'Smoking'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={'AlcoholDrinking'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={'Stroke'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={'PhysicalHealth'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={'MentalHealth'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={'DiffWalking'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={'Sex'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={'AgeCategory'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={'Race'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
                Gốc Tây Ban Nha
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
            name={'Diabetic'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={'PhysicalActivity'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={'GenHealth'}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={"SleepTime"}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={"Asthma"}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={"KidneyDisease"}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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
            name={"SkinCancer"}
            rules={[{ required: true, message: 'Hãy chọn một đáp án!' }]}
            label={
              <p
                style={textStyle}
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