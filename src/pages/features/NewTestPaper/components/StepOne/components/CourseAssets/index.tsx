import { Tabs } from "antd"
import { useState } from "react"

import reactSvg from "@/assets/react.svg"

import RelativeCourse from "../RelativeCourse"
import UploadDoc from "../UploadDoc"
import styles from "./index.module.less"

const tabItems = [
  {
    key: "1",
    label: (
      <div className={styles.tabTitle}>
        <img src={reactSvg} alt="star" />
        相关课程
      </div>
    ),
    forceReRender: false,
    children: <RelativeCourse></RelativeCourse>,
  },
  {
    key: "2",
    label: "上传文档",
    forceReRender: false,
    children: <UploadDoc></UploadDoc>,
  },
]
const CourseAssets = (props) => {
  const { className } = props
  const [activeKey, setActiveKey] = useState("1")
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <Tabs
        activeKey={activeKey}
        items={tabItems}
        onChange={(key) => {
          setActiveKey(key)
        }}
      ></Tabs>
    </div>
  )
}
export default CourseAssets
