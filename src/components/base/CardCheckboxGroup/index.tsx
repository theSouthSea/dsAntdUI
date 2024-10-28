import { ChangeEvent, useState } from "react"

import CardCheckboxFix2, { CardCheckboxProps } from "../CardCheckboxFix2"
import styles from "./index.module.less"

interface CardCheckboxGroupProps {
  list: CardCheckboxProps[]
  onChange: (values: string[]) => void
}
const CardCheckboxGroup = (props: CardCheckboxGroupProps) => {
  const { list, onChange } = props
  const [values, setValues] = useState<string[]>([])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    // const values = list.filter((item) => item.checked);
    const newValues = [...values]
    if (checked) {
      newValues.push(value)
    } else {
      newValues.splice(newValues.indexOf(value), 1)
    }
    setValues(newValues)
    onChange(newValues)
  }
  return (
    <div className={styles.checkboxGroup}>
      {list.map((item) => {
        return (
          <CardCheckboxFix2
            key={item.value}
            checked={item.checked}
            value={item.value}
            label={item.label}
            onChange={handleChange}
          />
        )
      })}
    </div>
  )
}
export default CardCheckboxGroup
