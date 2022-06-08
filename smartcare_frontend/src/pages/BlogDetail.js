import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import BlogDetailComponent from "../components/BlogDetailComponent";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  let { id } = useParams();

  return (
    <DefaultLayout>
      <div className="container">
        <BlogDetailComponent id={id} />
      </div>
    </DefaultLayout>
  );
}
