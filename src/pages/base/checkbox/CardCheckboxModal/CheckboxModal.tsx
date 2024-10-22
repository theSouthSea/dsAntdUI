import { Modal } from "antd"
import { ChangeEvent, useState } from "react"

import CardCheckboxFix1 from "@/components/base/CardCheckboxFix1"

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
interface CheckboxModalProps {
  open: boolean
  onOk: () => void
  onCancel: () => void
}
const CheckboxModal = (props: CheckboxModalProps) => {
  const { open, onOk, onCancel } = props
  const [checkedFixList, setCheckedFixList] = useState<string[]>([])

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
  console.log("modal-checkedFixList=", checkedFixList)
  const initState = () => {
    checkboxList.forEach((item) => {
      item.checked = false
    })
    setCheckedFixList([])
  }
  const handleOk = () => {
    initState()
    onOk()
  }
  const handleCancel = () => {
    initState()
    onCancel()
  }
  return (
    <Modal
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
              // checked={item.checked}
              checked={item.checked}
              onChange={handleCheckboxFixChange}
            ></CardCheckboxFix1>
          )
        })}
      </div>
    </Modal>
  )
}
export default CheckboxModal
