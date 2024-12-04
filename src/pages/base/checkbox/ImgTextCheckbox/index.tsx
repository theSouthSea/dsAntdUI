import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons"
import Section from "@business/Section"
import { useState } from "react"

import ImgTextCheckboxOpt, { CheckboxItem } from "@/components/base/ImgTextCheckbox"
import ImgTextCheckbox from "@/components/base/ImgTextCheckbox/origin"
import ImgTextCheckboxGroup from "@/components/base/ImgTextCheckboxGroup"

import { examDirectionList } from "../data"
import styles from "./index.module.less"

const ImgTextCheckboxDemo = () => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setCheckboxList((list) => {
      return list.map((item) => {
        if (item.value === value) {
          return {
            ...item,
            checked,
          }
        }
        return item
      })
    })
  }
  const [checkboxList, setCheckboxList] = useState<CheckboxItem[]>(() =>
    examDirectionList.map((item) => {
      return {
        ...item,
        checked: false,
      }
    }),
  )
  return (
    <>
      <div>复选框</div>
      <Section title="复选框-非选项数组">
        <div className={styles.checkboxBox}>
          <ImgTextCheckbox
            id="oneAnswer"
            name="multipleChoice"
            value="oneAnswer"
            label="单选题"
            icon={<HomeOutlined></HomeOutlined>}
          ></ImgTextCheckbox>
          <ImgTextCheckboxOpt
            // id="manyAnswer"
            name="multipleChoice"
            value="manyAnswer"
            label="多选题"
            icon={<LoadingOutlined />}
          ></ImgTextCheckboxOpt>
        </div>
      </Section>
      <Section title="复选框-选项数组">
        <ImgTextCheckboxGroup
          list={checkboxList}
          onChange={handleCheckboxChange}
        ></ImgTextCheckboxGroup>
      </Section>
    </>
  )
}
export default ImgTextCheckboxDemo
