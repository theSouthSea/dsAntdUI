import { ChangeEvent, memo } from "react"

import CardCheckboxFix2, { CheckboxItem } from "../CardCheckboxFix2"
import styles from "./index.module.less"

interface CardCheckboxGroupProps {
  list: CheckboxItem[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const CardCheckboxGroup = (props: CardCheckboxGroupProps) => {
  const { list, onChange } = props
  return (
    <div className={styles.checkboxGroup}>
      {list.map((item) => {
        return (
          <CardCheckboxFix2
            key={item.value}
            checked={item.checked}
            value={item.value}
            label={item.label}
            onChange={onChange}
          />
        )
      })}
    </div>
  )
}
export default memo(CardCheckboxGroup)
