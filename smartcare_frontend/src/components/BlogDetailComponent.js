import { Col, Row } from "antd";
import api from "../assets/mock_api";

export default function BlogDetailComponent({ id }) {
  const imgSrc =
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
  return (
    <Row gutter={[16, 16]}>
      {/* <Col span={24}>
        <p>{title}</p>
      </Col> */}
      <Col span={12} offset={6}>
        <img style={{ width: "100%", height: "auto" }} src={imgSrc} alt="" />
      </Col>
      {api
        .filter((item) => item.id === 1 || item.id === 2)
        .map((item) => (
          <Col span={24}>
            <p>{item.content}</p>
          </Col>
        ))}
    </Row>
  );
}
