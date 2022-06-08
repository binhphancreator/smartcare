import React from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";

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
        <Form layout="vertical" className="form">
          <Form.Item
            label="Chỉ số BMI của bạn là bao nhiêu?"
            className="form_select"
          >
            <InputNumber className="form_select"></InputNumber>
          </Form.Item>

          <Form.Item
            label="Bạn có thói quen hút thuốc không?"
            className="form_select"
          >
            <Radio.Group>
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Bạn có thói quen uống rượt bia không?"
            className="form_select"
          >
            <Radio.Group>
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label=" Bạn đã bao giờ bị ngất? (đột quỵ)?"
            className="form_select"
          >
            <Radio.Group>
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Hãy ước lượng trong vòng 30 ngày trở lại đây, từng có bao nhiêu ngày bạn cảm thấy không khoẻ?"
            className="form_select"
          >
            <Select>
              {createrange(30).map((item, key) => {
                return <Select.Option value={item}>{item} </Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label=" Hãy ước lượng trong vòng 30 ngày trở lại đây, từng có bao nhiêu ngày tinh thần bạn không tốt??"
            className="form_select"
          >
            <Select>
              {createrange(30).map((item, key) => {
                return <Select.Option value={item}>{item} </Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Bạn có gặp khó khăn khi đi lại hoặc leo cầu thang?"
            className="form_select"
          >
            <Radio.Group>
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Bạn thuộc phái nam hay nữ?" className="form_select">
            <Radio.Group>
              <Radio value={1}> Nam </Radio>
              <Radio value={0}> Nữ </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Sắc tộc của bạn là gì?" className="form_select">
            <Select>
              <Select.Option value={0}>Anh-Điêng </Select.Option>  
              <Select.Option value={1}>Châu Á </Select.Option>
              <Select.Option value={2}>Châu Phi </Select.Option>
              <Select.Option value={3}>gốc Tây Ban Nha </Select.Option>
              <Select.Option value={5}>Châu Âu</Select.Option>
              <Select.Option value={4}>Khác... </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Bạn đã từng bị tiểu đường chưa?"
            className="form_select"
          >
            <Radio.Group>
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Bạn có thói quen tập thể dục?"
            className="form_select"
          >
            <Radio.Group>
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Nhìn chung sức khoẻ của bạn như thế nào?"
            className="form_select"
          >
            <Select>
              {createrange(4).map((item, key) => {
                return <Select.Option value={item}>{item} </Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Một ngày bạn ngủ bao nhiêu giờ?"
            className="form_select"
          >
            <Select>
              {createrange(24).map((item, key) => {
                return <Select.Option value={item}>{item} </Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Bạn đã từng bị tiểu đường chưa?"
            className="form_select"
          >
            <Radio.Group>
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Bạn có từng bị bệnh thận? (không bao gồm sỏi, nhiễm trùng, đái dầm)"
            className="form_select"
          >
            <Radio.Group>
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Bạn có từng bị ung thư da?" className="form_select">
            <Radio.Group>
              <Radio value={1}> Có </Radio>
              <Radio value={0}> Không </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item className="submit">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
