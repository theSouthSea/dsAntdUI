import { Form, Input, Button, Checkbox } from '@base'
const TestForm = () => {
  const [form] = Form.useForm()
  const handleRegister = () => {
    console.log('注册')
    form.resetFields()
  }
  const handleRandomRegister = () => {
    console.log('随机注册')
    form.setFieldsValue({
      username: Math.random().toString(16).slice(2, 10),
      password: Math.random().toString(16).slice(2, 10),
      remeber: true,
    })
  }
  const handleFinish = (values: any) => {
    console.log('finish-value', values)
  }
  const handleFailed = (errorInfo: any) => {
    console.log('errorInfo', errorInfo)
  }
  return (
    <>
      <div>TestForm</div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remeber: true }}
        autoComplete="off"
        onFinish={handleFinish}
        onFinishFailed={handleFailed}
      >
        <Form.Item name="username" label="账号" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input placeholder="请输入用户名/手机号/用户ID"></Input>
        </Form.Item>
        <Form.Item name="password" label="密码" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password></Input.Password>
        </Form.Item>
        <Form.Item name="remeber" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>remeber me</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
          <Button onClick={handleRegister}>注册</Button>
          <Button onClick={handleRandomRegister}>随机注册</Button>
        </Form.Item>
      </Form>
    </>
  )
}
export default TestForm
