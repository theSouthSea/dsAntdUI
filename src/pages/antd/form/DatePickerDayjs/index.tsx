import type { FormProps } from "antd"
import { Button, DatePicker, Form } from "antd"
import dayjs from "dayjs"
import React from "react"

const initDate = dayjs("2024-01-01")
const dateTimestamp = initDate.valueOf()
console.log("dateTimestamp=", dateTimestamp)
console.log("initDate=", initDate)

type FieldType = {
  date?: string
}

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values)
}

const App: React.FC = () => {
  return (
    <Form
      name="getValueProps"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ date: dateTimestamp }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Date"
        name="date"
        rules={[{ required: true }]}
        getValueProps={(value) => ({ value: value && dayjs(Number(value)) })}
        normalize={(value) => value && `${dayjs(value).valueOf()}`}
      >
        <DatePicker />
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
