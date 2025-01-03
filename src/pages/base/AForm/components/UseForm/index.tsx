import { Button, Form, Input, Select, Space } from "antd"
import React, { forwardRef, Ref, RefObject, useImperativeHandle } from "react"

const { Option } = Select

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}
export interface UseFormRef {
  getFormValues: () => Promise<any>
}
interface UseFormProps {}
const App: React.FC = forwardRef<UseFormRef, UseFormProps>((props, ref) => {
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
  useImperativeHandle(ref, () => ({
    getFormValues: async () => {
      return form.validateFields()
      form
        .validateFields()
        .then((values) => {
          /*
      values:
        {
          username: 'username',
          password: 'password',
        }
      */
          return values
        })
        .catch((errorInfo) => {
          /*
        errorInfo:
          {
            values: {
              username: 'username',
              password: 'password',
            },
            errorFields: [
              { name: ['password'], errors: ['Please input your Password!'] },
            ],
            outOfDate: false,
          }
        */
        })
      // return form.getFieldsValue();
    },
  }))

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
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
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue("gender") === "other" ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
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
})

export default App
