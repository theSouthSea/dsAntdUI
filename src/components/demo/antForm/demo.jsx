import { Button } from "antd"
import React, { useRef, useState } from "react"

import { timestampToTime } from "@/utils/time"

import Form from "./form"

const FormComp = () => {
  //useState只能放在组件内
  let [isRequired, setRequired] = useState(true)

  const config = {
    columns: [
      { name: "userName", label: "用户名", rules: [{ required: true, message: "请输入用户名" }] },
      {
        name: "password",
        label: "密码",
        type: "password",
        rules: [{ required: true, message: "请输入密码" }],
      },
      {
        name: "confirmPwd",
        label: "确认密码",
        type: "password",
        rules: [
          { required: true, message: "请再一次输入密码" },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              //如果value为空，!value为true则直接返回Promise.resolve()就会提示“请再一次输入密码”
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve()
              }
              return Promise.reject("两次密码输入不一致")
            },
          }),
        ],
      },
      {
        name: "email",
        label: "邮箱",
        rules: [
          { required: true, message: "请输入邮箱" },
          {
            validator: (_, value) => {
              let reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
              if (!value || reg.test(value)) {
                return Promise.resolve()
              }

              return Promise.reject("邮箱格式不正确")
            },
          },
        ],
      },
      {
        name: "gender",
        label: "性别",
        type: "select",
        rules: [{ required: true, message: "请选择性别" }],
        list: [
          { value: "male", label: "男" },
          { value: "female", label: "女" },
        ],
        callback: (res) => onGenderChange(res),
      },
      {
        name: "highHeeled",
        label: "高跟鞋",
        rules: [{ required: isRequired, message: "请输入喜欢的高跟鞋" }],
      },
      { name: "exercise", label: "运动", rules: [{ required: true, message: "请输入喜欢的运动" }] },
      {
        name: "date",
        label: "日期",
        type: "datePicker",
        rules: [{ required: true, message: "请输入日期" }],
      },
    ],
    data: {
      userName: "小坏",
      gender: "female",
    },
  }

  //切换性别时会显示隐藏高跟鞋的正则校验
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        setRequired(false)
        break
      case "female":
        setRequired(true)
        break
    }
  }

  const childRef = useRef()
  const getFormVal = () => {
    const form = childRef.current.getForm()
    //可以在验证后再获取值
    form
      .validateFields()
      .then((valid) => {
        valid.date = timestampToTime(valid.date).replace(" ", "")
        console.log(valid)
      })
      .catch((e) => {})
    //也可以在不需要正则验证的地方直接通过这种方式来获取值
    // console.log(form.getFieldValue())
  }

  return (
    <div>
      <Form {...config} cRef={childRef} />
      <Button type="primary" onClick={getFormVal} style={{ marginLeft: "12%" }}>
        在组件外部获取form表单的值
      </Button>
    </div>
  )
}

export default FormComp
