import { Layout } from "antd";
import Header from "../components/Header";
const { Content } = Layout;

export default function DefaultLayout(props) {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
    </>
  );
}
