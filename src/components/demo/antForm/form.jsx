import { Button, DatePicker, Form, Input, Select } from "antd"
import PropTypes from "prop-types"
import React, { createElement, useEffect, useImperativeHandle } from "react"

import { timestampToTime } from "@/utils/time"
// 来源: https://www.cnblogs.com/tnnyang/p/13497306.html
const FormItem = Form.Item,
  { Password } = Input,
  { Option } = Select,
  h = createElement

const FormComponent = ({ columns, data, cRef }) => {
  //通过Form.useForm对表单数据域进行交互。useForm是React Hooks的实现，只能用于函数组件
  const [form] = Form.useForm()
  //cRef就是父组件传过来的ref
  useImperativeHandle(cRef, () => ({
    //getForm就是暴露给父组件的方法
    getForm: () => form,
  }))

  const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    },
    tailLayout = {
      wrapperCol: { offset: 4, span: 16 },
    }

  //若有正则验证，则在所有的正则校验都通过后用来获取输入的数据，若没有正则校验，则直接获取输入的数据
  const onFinish = (values) => {
    values.date = timestampToTime(values.date)
    console.log(values)
  }

  //重置要配合着const [form] = Form.useForm()以及form={form}
  const onReset = () => {
    form.resetFields()
  }

  //form表单的回显
  useEffect(() => {
    form.setFieldsValue(data)
  }, [])

  const components = {
    select: ({ label, list = [], callback = () => {} }) =>
      h(
        Select,
        { placeholder: label, onChange: (v) => callback(v) },
        list.map((c) => h(Option, { key: c.value, value: c.value }, c.label)),
      ),
    input: ({ label }) => <Input placeholder={label} />,
    password: ({ label }) => h(Password, { placeholder: label }),
    datePicker: ({ label }) => <DatePicker placeholder={label} format="YYYY-MM-DD" />,
  }

  return (
    <Form {...layout} form={form} onFinish={onFinish}>
      {columns.map((n) => {
        const { type = "input" } = n,
          C = components[type]
        return (
          <FormItem label={n.label} name={n.name} rules={n.rules} key={n.name}>
            {C(n)}
          </FormItem>
        )
      })}
      <FormItem {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{ marginRight: "20px" }}>
          提交
        </Button>
        <Button htmlType="button" onClick={onReset}>
          重置
        </Button>
      </FormItem>
    </Form>
  )
}

FormComponent.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.object,
  cRef: PropTypes.object,
}

export default FormComponent
