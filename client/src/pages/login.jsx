import axios from "axios"
import { Button, Checkbox, Form, Input, Space } from 'antd';

export const Login = () => {
    const onFinish = (values) => {
        // console.log('Success:', values);
        // userLog.username = values.username;
        // setValue(() => !value)
        // navigate("/home")
    };

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
                <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 1, span: 10 }}>
                        <Button className="submit-btn" type="primary" htmlType="submit" size="large">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Space>
        </>
    )
}