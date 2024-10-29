import { TreeSelect } from "antd"
import React, { useState } from "react"

const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "my leaf",
          },
          {
            value: "leaf2",
            title: "your leaf",
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "sss",
            title: <b style={{ color: "#08c" }}>sss</b>,
          },
        ],
      },
    ],
  },
]
type Option = { label: string; value: string }
const App: React.FC = () => {
  const [value, setValue] = useState<Option[]>()

  const onChange = (newValue: Option[]) => {
    console.log(newValue)
    /* labelInValue为false输出 */
    // const newValueOutput = ['leaf1']

    /* labelInValue为true输出 */
    // const newValueOutput = [
    //   {
    //     label: "my leaf",
    //     value: "leaf1",
    //   },
    // ]
    setValue(newValue)
  }

  return (
    <TreeSelect
      showSearch
      style={{ width: "100%" }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please select"
      allowClear
      multiple
      labelInValue
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  )
}

export default App
