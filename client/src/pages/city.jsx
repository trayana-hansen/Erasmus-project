import { Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: "64%",
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120*2,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
export const City = () => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Sider style={siderStyle}>Imagen</Sider>
        <Content style={contentStyle}>Mucho texto</Content>
      </Layout>
      <Layout>
        <Content style={contentStyle}>Mucho texto</Content>
        <Sider style={siderStyle}>Imagen</Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Space>
);
