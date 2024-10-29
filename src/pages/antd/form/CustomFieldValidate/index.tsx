import { Button, Checkbox, Form, Input } from "antd"

import CheckboxGroup from "@/components/base/CheckboxGroup"

const initialValues = {
  username: "",
  fruit: ["Apple"],
}
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
]
const CustomFieldValidate = () => {
  const [form] = Form.useForm()
  const handleFinish = (values: any) => {
    console.log("handleFinish-values=", values)
  }
  const handleFailed = (errorInfo: any) => {
    console.log("errorInfo=", errorInfo)
    const { errorFields, outOfDate, values } = errorInfo
    errorFields.forEach(({ errors, name, warnings }: any) => {
      console.log("errors", errors)
      console.log("name", name)
      console.log("warnings", warnings)
    })
  }
  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={handleFinish}
      onFinishFailed={handleFailed}
    >
      <Form.Item name="username" label="用户名" rules={[{ required: true, message: "必填" }]}>
        <Input></Input>
      </Form.Item>
      {/* <Form.Item name="fruit" label="水果" rules={[{ required: true, message: "必填" }]}>
        <Checkbox.Group options={options}></Checkbox.Group>
      </Form.Item> */}
      <Form.Item name="fruit" label="水果" rules={[{ required: true, message: "必填" }]}>
        <CheckboxGroup options={options}></CheckboxGroup>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}
export default CustomFieldValidate
