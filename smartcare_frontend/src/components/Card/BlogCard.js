import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function BlogCard({ id, image, title, content }) {
  return (
    <Card
      style={{ height: "100%" }}
      type="inner"
      cover={<img alt="example" src={image} />}
      title={title}
      extra={<a href={`/blog/${id}`}>More</a>}
    >
      <Meta description={content} />
    </Card>
  );
}
