import React, { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import BlogDetailComponent from "../components/BlogDetailComponent";
import { useParams } from "react-router-dom";
import axios from "../global/axios";

export default function BlogDetail() {
  let { id } = useParams();

  const [data, setData] = useState(null)
  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get(`/blogs/${id}`)
      setData(res.data.data)
    }
    getBlog()
  }, [])

  return (
    <DefaultLayout>
      <div className="container">
        {data !== null ?
          <BlogDetailComponent author={data.author} title={data.title} imageUrl={data.imageUrl} text={data.text} description={data.description} />
          : <></>
        }
      </div>
    </DefaultLayout>
  );
}
