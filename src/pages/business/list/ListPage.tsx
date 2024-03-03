import { Space } from "antd"
import { LabeledValue } from "antd/es/select"
// import { Moment } from "moment"
import React from "react"
import { Link } from "react-router-dom"

import { userApi } from "@/apis/userApi"

import BasicList from "./BasicList"
// import { BasicList, BasicListPropsType, FilterFieldTypeEnum } from "../../components/list"
import ListProvider from "./ListProvider"

type BasicListPropsType = any
type PropsType = any
enum FilterFieldTypeEnum {
  Select = "select",
  TimeRange = "datePicker",
  Input = "input",
}

type Config = Omit<BasicListPropsType, "params"> & {
  params?: {
    keyword?: string
    test?: number
    // birthdayTimeRange?: [Moment, Moment]
    birthdayTimeRange?: [string, string]
  }
}
const testOptionList: LabeledValue[] = [
  { value: 0, label: "测试 0" },
  { value: 1, label: "测试 1" },
  { value: 2, label: "测试 2" },
]

//列表配置项
const config: Record<string, any> = {
  header: {
    placeholder: "用户名/住址",
    list: ["用户", "列表"],
  },
  filters: [
    {
      // type: FilterFieldTypeEnum.Select,
      type: FilterFieldTypeEnum.Input,
      label: "测试字段",
      field: "test",
      options: testOptionList,
    },
    {
      type: FilterFieldTypeEnum.Input,
      label: "生日",
      field: "birthdayTimeRange",
    },
  ],
  columns: [
    { field: "id", title: "ID", dataIndex: "id" },
    { field: "name", title: "姓名", dataIndex: "name" },
    { field: "birthday", title: "生日", dataIndex: "birthday" },
    {
      field: "operate",
      title: "操作",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <Link to={`/system/user/${record.id}`}>详情</Link>
        </Space>
      ),
    },
  ],
  api: userApi,
}

/**
 * 一个基本的列表页面
 * @constructor
 */
const BasicListExample: React.FC<PropsType> = () => {
  return (
    <ListProvider>
      <BasicList {...config} />
    </ListProvider>
  )
}

export default BasicListExample
