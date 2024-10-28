import { ChangeEvent, useState } from "react"

import { CheckboxItem } from "@/components/base/CardCheckbox"
import CardCheckboxGroupCon from "@/components/base/CardCheckboxGroupCon"

const examDirectionList = [
  {
    id: 1,
    name: "examDirection",
    label: "定义理解",
    value: "define",
  },
  {
    id: 2,
    name: "examDirection",
    label: "概念辨析",
    value: "discriminate",
  },
  {
    id: 3,
    name: "examDirection",
    label: "场景应用",
    value: "application",
  },
]
const CardCheckboxGroupConDemo = () => {
  const [checkedValues, setCheckedValues] = useState<(string | number)[]>([])
  const [checkedList, setCheckedList] = useState<CheckboxItem[]>(() =>
    examDirectionList.map((item) => ({ ...item, checked: false })),
  )
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    const newCheckedList = [...checkedList]
    newCheckedList.forEach((item) => {
      if (item.value === value) {
        item.checked = checked
      }
    })
    const values = newCheckedList.filter((item) => item.checked).map((item) => item.value)
    setCheckedValues(values)
    setCheckedList(newCheckedList)
  }

  return (
    <>
      <div>CardCheckboxGroupCon</div>
      <CardCheckboxGroupCon list={checkedList} onChange={handleChange}></CardCheckboxGroupCon>
      <div>选中的值:{checkedValues}</div>
    </>
  )
}
export default CardCheckboxGroupConDemo
