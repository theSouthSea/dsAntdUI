import { Button, Modal } from "antd"
import { ChangeEvent, useState } from "react"

import CardCheckbox from "@/components/base/CardCheckbox"
import CardCheckboxFix1 from "@/components/base/CardCheckboxFix1"

import CheckboxModal from "./CheckboxModal"
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
const CardCheckboxModal = () => {
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
    const currentItem = checkboxList.find((item) => item.value === value)
    if (currentItem) {
      currentItem.checked = checked
    }
    if (checked) {
      setCheckedFixList([...checkedFixList, value])
    } else {
      setCheckedFixList(checkedFixList.filter((item) => item !== value))
    }
  }
  console.log("checkedList=", checkedList)
  console.log("checkedFixList=", checkedFixList)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleOk = () => {
    setOpen(false)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  return (
    <>
      <div>CardCheckboxModal</div>
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
      <div>CardCheckboxFix1Demo</div>
      <div className={styles.checkboxContainer}>
        {checkboxList.map((item) => {
          return (
            <CardCheckboxFix1
              key={item.id}
              value={item.value}
              label={item.label}
              checked={item.checked}
              onChange={handleCheckboxFixChange}
            ></CardCheckboxFix1>
          )
        })}
      </div>
      <div>页面上出现相同id的Checkbox会出现选不中的问题</div>
      <div className={styles.checkboxContainer}>
        {checkboxList.map((item) => {
          return (
            <CardCheckboxFix1
              key={item.id}
              value={item.value}
              label={item.label}
            ></CardCheckboxFix1>
          )
        })}
      </div>
      <Button onClick={handleOpen}>打开弹框</Button>
      <CheckboxModal open={open} onOk={handleOk} onCancel={handleCancel}></CheckboxModal>
      {/* <Modal
        title="查看复选框在弹框关闭再打开后的状态变化"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={styles.checkboxContainer}>
          {checkboxList.map((item) => {
            return (
              <CardCheckboxFix1
                key={item.id}
                value={item.value}
                label={item.label}
                checked={item.checked}
                onChange={handleCheckboxFixChange}
              ></CardCheckboxFix1>
            )
          })}
        </div>
      </Modal> */}
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
export default CardCheckboxModal
