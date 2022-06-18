import { Col, Row } from "antd";

export default function BlogDetailComponent({ author, title, imageUrl, text, description }) {
  const data = text.split('/n/n')

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h2 style={{ fontWeight: 600 }}>{title}</h2>
        {author ?
          <p>Tác giả {author}</p>
          : <></>
        }
        <p>{description}</p>
      </Col>
      <Col span={16} offset={4}>
        <img style={{ width: "100%", height: "auto" }} src={imageUrl} alt="" />
      </Col>
      {data.map((item, index) => (
        <Col span={24} key={index}>
          <p style={{ fontSize: 16 }}>{item}</p>
        </Col>
      ))}
    </Row>
  );
}
