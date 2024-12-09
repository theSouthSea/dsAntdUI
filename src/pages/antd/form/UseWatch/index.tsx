import type { FormProps } from "antd"
import { Button, Checkbox, Form, Input, Select } from "antd"
import React from "react"

import Preview from "./Preview"

type FieldType = {
  compType?: string
  boundData?: string
  remember?: string
}

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values)
}

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo)
}
const bindDataOptions = [
  {
    label: "Vue",
    value: "vue",
  },
  {
    label: "React",
    value: "react",
  },
]
const compTypeOptions = [
  {
    label: "AppsCard",
    value: "AppsCard",
  },
  {
    label: "NewsCard",
    value: "NewsCard",
  },
]
const App: React.FC = () => {
  const [form] = Form.useForm<FieldType>()
  return (
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
      <Form.Item<FieldType> label="组件类型" name="compType" rules={[{ required: true }]}>
        <Select options={compTypeOptions} />
      </Form.Item>

      <Form.Item<FieldType>
        label="绑定数据"
        name="boundData"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Select options={bindDataOptions} />
      </Form.Item>
      <Form.Item<FieldType>
        label="预览"
        name="compType"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Preview form={form} field="boundData"></Preview>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
