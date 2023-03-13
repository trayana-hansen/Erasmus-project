import axios from "axios"
import { Button, Form, Input, Space } from 'antd';
import { Logo } from '../components/logo.jsx'
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        // console.log('Success:', values);
        // userLog.username = values.username;
        // setValue(() => !value)
        // navigate("/home")
    };

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    const goTo = () => {
        navigate('/register')
    }

    return (
        <>
            <Logo />
            <div className="forms-pages-container">
                <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
                    <h2>Welcome Back!</h2>
                </Space>
                <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
                    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password />
                        </Form.Item>
                        <Button className="submit-btn" htmlType="submit" size="large">
                            Submit
                        </Button>
                    </Form>
                </Space>
                <div className="sign-up">
                    <h4>Don't have an account? </h4>
                    <Button onClick={goTo} className=" sign-up-btn" type="link" block>
                        SIGN UP
                    </Button>
                </div>
            </div>
        </>
    )
}