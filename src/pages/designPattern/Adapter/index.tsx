import type { FormProps } from "antd"
import { Button, Checkbox, Form, Input, Select } from "antd"
import { useEffect, useState } from "react"

import { sleep } from "@/utils"

import Adapter from "./adapter"

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values)
}

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo)
}
const AdapterDemo = () => {
  const [list, setList] = useState([])
  const [selectOptions, setSelectOptions] = useState([])
  const [checkedOptions, setCheckedOptions] = useState([])
  useEffect(() => {
    sleep(3000).then(() => {
      const data = [
        {
          id: 1,
          name: "张三",
          age: 18,
          gender: "男",
          address: "北京",
        },
        {
          id: 2,
          name: "李四",
          age: 20,
          gender: "男",
          address: "上海",
        },
      ]
      const adapter = new Adapter(data)
      const columns = [{ field: "id" }, { field: "name" }, { field: "gender" }]
      // 处理成列表格式
      const listTemp = adapter.transformToList(columns)
      setList(listTemp)
      console.log("list=", listTemp)
      // 处理成下拉框格式
      const selectOptionsTemp = adapter.transformToSelectOptions({
        labelField: "name",
        valueField: "id",
      })
      setSelectOptions(selectOptionsTemp)
      console.log("selectOptions=", selectOptionsTemp)
      // 处理成多选框格式;
      const checkedOptionsTemp = adapter.transformToCheckedOptions({
        valueField: "id",
      })
      setCheckedOptions(checkedOptionsTemp)
      console.log("checkedOptions=", checkedOptionsTemp)
    })
  }, [])
  const handleLeaderChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const onMembersChange = (value: string[]) => {
    console.log(`checkbox value ${value}`)
  }
  return (
    <>
      <div>AdapterDemo</div>
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
          label="leader"
          name="leader"
          rules={[{ required: true, message: "Please input leader username!" }]}
        >
          <Select style={{ width: 120 }} onChange={handleLeaderChange} options={selectOptions} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="members"
          // valuePropName="checked"
        >
          <Checkbox.Group options={checkedOptions} onChange={onMembersChange} />
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
export default AdapterDemo
