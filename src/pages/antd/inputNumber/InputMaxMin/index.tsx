import type { InputNumberProps } from "antd"
import { InputNumber, Space } from "antd"
import React from "react"

const onChange: InputNumberProps["onChange"] = (value) => {
  console.log("changed", value)
}

const App: React.FC = () => (
  <Space>
    <InputNumber<number>
      defaultValue={1000}
      max={9999}
      min={1}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      parser={(value) => value?.replace(/\$\s?|(,*)/g, "") as unknown as number}
      onChange={onChange}
    />
    <InputNumber<number>
      defaultValue={100}
      min={0}
      max={100}
      formatter={(value) => `${value}%`}
      parser={(value) => value?.replace("%", "") as unknown as number}
      onChange={onChange}
    />
  </Space>
)

export default App
