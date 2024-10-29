import { ChangeEventHandler, useEffect, useState } from "react"

import Checkbox from "../Checkbox/pure"
import styles from "./index.module.less"

interface CheckboxGroupProps {
  value?: string[]
  options: IOption[]
  onChange?: (value: string[]) => void
}
const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { value = [], options, onChange } = props
  const [checkList, setCheckList] = useState(() =>
    options.map((item) => ({ ...item, checked: false })),
  )
  const handleChange: ChangeEventHandler = (e) => {
    const { value: cValue, checked } = e.target as HTMLInputElement
    const newCheckedValue = checked ? [...value, cValue] : value.filter((item) => item !== cValue)
    onChange?.(newCheckedValue)
  }
  useEffect(() => {
    if (Array.isArray(value)) {
      setCheckList((prev) => prev.map((item) => ({ ...item, checked: value.includes(item.value) })))
    }
  }, [value])
  return (
    <div className={styles.box}>
      {checkList.map((item) => (
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
