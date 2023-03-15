import { Button, Form, Input, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import { Bground } from "../components/bground.jsx";
import { login } from "../services/JWT.js";
import Header from "../components/header.jsx";

export const Login = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        login(values.email, values.password)
            .then(res => navigate('/cities'))
            .catch(err => console.log(err))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const goTo = () => {
        navigate('/register')
    }

    return (
        <>
            <Bground />
            <Header page="type-1" />
            <div className="forms-pages-container">
                <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
                    <h2>WELCOME BACK</h2>
                </Space>
                <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
                    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password />
                        </Form.Item>
                        <Button className="submit-btn" htmlType="submit" size="large">
                            SUBMIT
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