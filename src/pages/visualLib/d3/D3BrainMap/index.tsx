import { Button, Space } from "antd"
import { useState } from "react"

import BrainMap from "./BrainMap"
import { es6TreeData, reactTreeData } from "./data"

const D3BrainMap = () => {
  const [treeData, setTreeData] = useState(es6TreeData)
  const handleBrainData1 = () => {
    setTreeData(es6TreeData)
  }
  const handleBrainData2 = () => {
    setTreeData(reactTreeData)
  }
  return (
    <div>
      <div>脑图</div>
      <Space>
        <Button type="primary" onClick={handleBrainData1}>
          设置脑图数据为ES6知识结构图
        </Button>
        <Button type="primary" onClick={handleBrainData2}>
          设置脑图数据为react知识结构图
        </Button>
      </Space>
      <BrainMap data={treeData}></BrainMap>
    </div>
  )
}
export default D3BrainMap
