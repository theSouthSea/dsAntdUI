import { ChangeEventHandler, useRef, useState } from "react"

import Checkbox from "../Checkbox/pure"
import styles from "./index.module.less"

interface CheckboxGroupProps {
  value?: string[]
  options: IOption[]
  onChange?: (value: string[]) => void
}
const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { value, options, onChange } = props
  const [, forceUpdate] = useState({})
  const isControlled = value !== undefined
  const checkListRef = useRef(options.map((item) => ({ ...item, checked: false })))
  checkListRef.current = isControlled
    ? options.map((item) => ({ ...item, checked: value.includes(item.value) }))
    : checkListRef.current
  const handleChange: ChangeEventHandler = (e) => {
    const { value: cValue, checked } = e.target as HTMLInputElement
    checkListRef.current = checkListRef.current.map((item) => ({
      ...item,
      checked: item.value === cValue ? checked : item.checked,
    }))
    if (!isControlled) {
      forceUpdate({})
    }
    const newCheckedValue = checkListRef.current
      .filter((item) => item.checked)
      .map((item) => item.value)
    onChange?.(newCheckedValue)
  }
  return (
    <div className={styles.box}>
      {checkListRef.current.map((item) => (
        <Checkbox
          value={item.value}
          label={item.label}
          key={item.value}
          checked={item.checked}
          onChange={handleChange}
        ></Checkbox>
      ))}
    </div>
  )
}
export default CheckboxGroup
