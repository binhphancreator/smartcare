import { Layout } from "antd";
import Header from "../components/Header";
import HeaderIntro from "../components/HeaderIntro";
const { Content } = Layout;

export default function DefaultLayout(props) {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
    </>
  );
}
