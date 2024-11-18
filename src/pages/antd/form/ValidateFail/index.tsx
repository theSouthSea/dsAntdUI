import { Button, Form, FormProps, Input, InputNumber, Select, Space } from "antd"

const { Option } = Select
type FieldType = {
  gender?: string
  note?: string
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const ValidateFail = () => {
  const [form] = Form.useForm()

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" })
        break
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" })
        break
      case "other":
        form.setFieldsValue({ note: "Hi there!" })
        // form.setFieldValue("note", "Hello")
        break
      default:
    }
  }

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" })
  }
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }
  return (
    <>
      <div>ValidateFail-校验失败不显示错误信息</div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="age" label="Age" rules={[{ required: true }]}>
          <InputNumber min={1} max={150}></InputNumber>
        </Form.Item>
        <Form.Item name="age1" label="Age1" noStyle={true} rules={[{ required: true }]}>
          <InputNumber min={1} max={150}></InputNumber>
        </Form.Item>
        <Form.Item name="age2" label="Age2" help="" rules={[{ required: true }]}>
          <InputNumber min={1} max={150} addonAfter="年龄" style={{ width: 100 }}></InputNumber>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}
export default ValidateFail
