import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/Card/BlogCard";
import DefaultLayout from "../layouts/DefaultLayout";
import api_blog from "../assets/mock_api_blog";
import axios from "../global/axios";

export default function Blog() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get("/blogs")
      setData(res.data.data)
    }
    getBlog()
  }, [])

  // const imgSrc =
  //   "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
  return (
    <DefaultLayout>
      <div className="container">
        <Row gutter={[32, 32]}>
          {data.map((item) => (
            <Col span={8} key={item._id.$oid}>
              <BlogCard
                id={item._id.$oid}
                image={item.imageUrl}
                title={item.title}
                content={item.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </DefaultLayout>
  );
}
