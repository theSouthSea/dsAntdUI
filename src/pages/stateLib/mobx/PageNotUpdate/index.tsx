import Section from "@business/Section"
import { Input } from "antd"
import { observer } from "mobx-react-lite"
import { useCallback } from "react"

import ExamContent from "./ExamContent"
import store from "./store"
// import styles from "./index.module.less"

const PageNotUpdate = () => {
  const handleContentChange = (e) => {
    store.examContent = e.target.value
  }
  const handleChange = useCallback((e) => {
    store.examContent = e.target.value
  }, [])
  return (
    <>
      <div>PageNotUpdate</div>
      <Section title="来自脑图的更新">
        <Input defaultValue={store.examContent} onBlur={handleContentChange}></Input>
      </Section>
      <ExamContent value={store.examContent} onChange={handleChange}></ExamContent>
    </>
  )
}
export default observer(PageNotUpdate)
