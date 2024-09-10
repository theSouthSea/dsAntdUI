import type { FormProps } from "antd"
import { Button, Checkbox, Form, Input } from "antd"

import { Validator } from "./strategy"

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const validators = [
  {
    name: "用户名",
    field: "username",
    validator: "isNonEmpty",
  },
  {
    name: "密码",
    field: "password",
    validator: "minLength:6",
  },
  {
    name: "手机",
    field: "phone",
    validator: "phone",
  },
  {
    name: "同意协议",
    field: "remember",
    validator: "isRequired",
  },
]
const StrategyDemo = () => {
  // useEffect(() => {

  // }, [])

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values)
    const validator = new Validator(values)

    for (const v of validators) {
      validator.add(v)
    }
    validator
      .start()
      .then(() => {
        // 校验通过
        console.log("校验通过")
      })
      .catch((err) => {
        // 校验不通过
        console.log("err=", err)
      })
  }

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }
  return (
    <>
      <div>StrategyDemo</div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
export default StrategyDemo
