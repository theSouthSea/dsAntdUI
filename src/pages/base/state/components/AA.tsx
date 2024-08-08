// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Checkbox, Form, FormProps, Input, InputNumber } from "antd"
import { memo, useEffect } from "react"

import { ArrayItemProps } from "../ArrayState"

export type FieldType = {
  name: string
  age: number
  // password?: string;
  // remember?: string;
}
const AA = (props: ArrayItemProps) => {
  console.log("AA render")
  const { id, name, age, onSubmit } = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({ name, age })
  }, [age, form, name])

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values)
    onSubmit(values, id)
  }

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }
  return (
    <>
      <div>AA</div>
      <Form
        name="basic"
        form={form}
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
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input your age!" }]}
        >
          <InputNumber min={1} max={150} defaultValue={3} />
        </Form.Item>

        {/* <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
export default memo(AA)
