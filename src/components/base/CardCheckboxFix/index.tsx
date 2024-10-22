import { ChangeEvent } from "react"

import styles from "./index.module.less"

export interface CardCheckboxProps {
  // id: string
  name: string
  value: string
  label: string
  icon?: React.ReactNode
  direction?: "horizontal" | "vertical"
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
const CardCheckbox = (props: CardCheckboxProps) => {
  const { name, value, label, icon, direction = "horizontal", onChange } = props
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }
  return (
    <div className={styles.cardBox}>
      <label className={styles[direction]}>
        <input type="checkbox" name={name} value={value} onChange={handleChange} />
        {icon && <div className={styles.iconBox}>{icon}</div>}
        <div className={styles.labelBox}>{label}</div>
      </label>
    </div>
  )
}
export default CardCheckbox
