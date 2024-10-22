import { ChangeEvent, useState } from "react"

import CardCheckbox from "@/components/base/CardCheckbox"
import CardCheckboxFix from "@/components/base/CardCheckboxFix"

import styles from "./index.module.less"

const checkboxList = [
  {
    id: 1,
    name: "examDirection",
    label: "定义理解",
    value: "define",
    checked: false,
  },
  {
    id: 2,
    name: "examDirection",
    label: "概念辨析",
    value: "discriminate",
    checked: false,
  },
  {
    id: 3,
    name: "examDirection",
    label: "场景应用",
    value: "application",
    checked: false,
  },
]
const CardCheckboxDemo = () => {
  const [checkedList, setCheckedList] = useState<string[]>([])
  const [checkedFixList, setCheckedFixList] = useState<string[]>([])
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    console.log("handleCheckboxChange=", value, checked)
    if (checked) {
      setCheckedList([...checkedList, value])
    } else {
      setCheckedList(checkedList.filter((item) => item !== value))
    }
  }
  const handleCheckboxFixChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    console.log("handleCheckboxFixChange=", value, checked)
    if (checked) {
      setCheckedFixList([...checkedFixList, value])
    } else {
      setCheckedFixList(checkedFixList.filter((item) => item !== value))
    }
  }
  console.log("checkedList=", checkedList)
  console.log("checkedFixList=", checkedFixList)
  return (
    <>
      <div>CardCheckboxDemo</div>
      <div className={styles.checkboxContainer}>
        {checkboxList.map((item) => {
          return (
            <CardCheckbox
              id={String(item.id)}
              key={item.id}
              name={item.name}
              value={item.value}
              label={item.label}
              onChange={handleCheckboxChange}
            ></CardCheckbox>
          )
        })}
      </div>
      <div>CardCheckboxFixDemo</div>
      <div className={styles.checkboxContainer}>
        {checkboxList.map((item) => {
          return (
            <CardCheckboxFix
              key={item.id}
              name={item.name}
              value={item.value}
              label={item.label}
              onChange={handleCheckboxFixChange}
            ></CardCheckboxFix>
          )
        })}
      </div>
      <div>页面上出现相同id的Checkbox会出现选不中的问题</div>
      <div className={styles.checkboxContainer}>
        {checkboxList.map((item) => {
          return (
            <CardCheckboxFix
              key={item.id}
              name={item.name}
              value={item.value}
              label={item.label}
            ></CardCheckboxFix>
          )
        })}
      </div>
      {/* {
      checkboxList.map((item) => {
        return (
          <div key={item.id}>
            <input type="checkbox" id={item.id} name="examDirection" value={item.id} checked={item.checked} />
            <label htmlFor={item.id}>{item.title}</label>
          </div>
        )
      })
    } */}
    </>
  )
}
export default CardCheckboxDemo
