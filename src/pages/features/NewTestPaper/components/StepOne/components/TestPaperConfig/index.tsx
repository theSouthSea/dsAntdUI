import PersonalScope from "@business/field/PersonalScope"
import { treeDataSimple } from "@business/field/PersonalScope/treeData"
import { Button, Form, Input, Space } from "antd"
import TextArea from "antd/es/input/TextArea"
import { forwardRef, useImperativeHandle } from "react"

import styles from "./index.module.less"

interface TestPaperConfigProps {
  className?: string
}
type TestPaperConfigRef = {}
const initialValues = {
  examName: "",
}
const TestPaperConfig = forwardRef<TestPaperConfigRef, TestPaperConfigProps>((props, ref) => {
  const { className } = props
  const [form] = Form.useForm()
  const handleFinish = (values) => {
    console.log(values)
  }
  const handleFinishFailed = (errorInfo) => {
    console.log(errorInfo)
  }
  useImperativeHandle(
    ref,
    () => ({
      getFormValues: async () => form.validateFields(),
    }),
    [form],
  )
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        scrollToFirstError
        initialValues={initialValues}
      >
        <Form.Item
          label="试卷名称"
          name="examName"
          rules={[
            {
              required: true,
              message: "请输入试卷名称",
            },
          ]}
        >
          <Input showCount maxLength={30} placeholder="请输入试卷名称"></Input>
        </Form.Item>
        <Form.Item
          label="考核目标"
          name="examTarget"
          rules={[
            {
              required: true,
              message: "请输入考核目标",
            },
          ]}
        >
          <TextArea
            autoSize={{ maxRows: 10, minRows: 6 }}
            showCount
            maxLength={300}
            placeholder="请输入考核目标"
          ></TextArea>
        </Form.Item>
        <Form.Item
          label="考核对象"
          name="examPersons"
          rules={[
            {
              required: true,
              message: "请选择考核对象",
            },
          ]}
        >
          <PersonalScope treeData={treeDataSimple}></PersonalScope>
        </Form.Item>
        {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset">Reset</Button>
        </Form.Item> */}
        <Form.Item noStyle>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
})
export default TestPaperConfig
