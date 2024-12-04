import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import React from "react"

import styles from "./index.module.less"

const RelativeCourse = () => {
  const [keyword, setKeyword] = React.useState("")
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }
  const handleSearch = () => {
    console.log("keyword", keyword)
  }
  return (
    <div className={styles.container}>
      <Input
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="请输入"
        suffix={<SearchOutlined onClick={handleSearch} />}
      ></Input>
    </div>
  )
}
export default RelativeCourse
