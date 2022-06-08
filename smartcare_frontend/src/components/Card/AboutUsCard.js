import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function AboutUsCard({ name, description }) {
  // Nguyễn Hoàng Yên "www.instagram.com"
  const imageSrc = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";
  return (
    <Card
      className="card"
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt={name} src={imageSrc} />}
    >
      <Meta title={name} description={description} />
    </Card>
  );
}
