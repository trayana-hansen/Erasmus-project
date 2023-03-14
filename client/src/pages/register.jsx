import { Logo } from "../components/logo";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { Bground } from "../components/bground";
import { register } from "../services/JWT";

export const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    register(values.email, values.username, values.password)
    navigate("/cities")
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const goTo = () => {
    navigate('/login')
  }
  return (
    <>
      <Bground />
      <Logo />
      <div className="forms-pages-container">
        <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
          <h2>CREATE ACCOUNT</h2>
        </Space>
        <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
          <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password />
            </Form.Item>

            <Button className="submit-btn" htmlType="submit" size="large">
              SIGN UP
            </Button>
          </Form>
        </Space>
        <div className="sign-up">
          <h4>Already have an account? </h4>
          <Button onClick={goTo} className=" sign-up-btn" type="link" block>
            LOGIN
          </Button>
        </div>
      </div>
    </>
  )
}