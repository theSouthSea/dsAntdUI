import { Button, Form, Input, Select, Space } from "antd"

import { useListContext } from "./ListProvider"

const { Option } = Select
interface FilterFormProps {
  filters: any[]
}
const fieldMap = {
  input: Input,
  select: Select,
}
// const onFinish = (values: any) => {
//   console.log("Success:", values)
// }

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo)
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}
const FilterForm = (props: FilterFormProps) => {
  const { filters } = props
  const [form] = Form.useForm()
  const { onFormDataChange } = useListContext()

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
        break
      default:
    }
  }

  const onFinish = (values: any) => {
    const formValues = filters.reduce(
      (obj, { field }) => ({
        ...obj,
        [field]: values[field],
      }),
      {}
    )
    console.log("onFinish-values", values, formValues)
    onFormDataChange(formValues)
  }

  const onReset = () => {
    form.resetFields()
  }

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" })
  }
  return (
    <Form
      {...layout}
      form={form}
      name="basic"
      style={{ maxWidth: 600 }}
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {filters.map((filter, index) => {
        const FormField = fieldMap[filter.type as keyof typeof fieldMap]
        return (
          <Form.Item key={index} label={filter.label} name={filter.field} rules={filter.rules}>
            <FormField></FormField>
          </Form.Item>
        )
      })}
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
  )
}
export default FilterForm
