import { ChangeEvent } from "react"

import styles from "./index.module.less"

export interface CardCheckboxProps {
  id: string
  name: string
  value: string
  label: string
  icon?: React.ReactNode
  direction?: "horizontal" | "vertical"
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
const CardCheckbox = (props: CardCheckboxProps) => {
  const { id, name, value, label, icon, direction = "horizontal", onChange } = props
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }
  return (
    <div className={styles.cardBox}>
      <input type="checkbox" id={id} name={name} value={value} onChange={handleChange} />
      <label htmlFor={id} className={styles[direction]}>
        {icon && <div className={styles.iconBox}>{icon}</div>}
        <div className={styles.labelBox}>{label}</div>
      </label>
    </div>
  )
}
export default CardCheckbox
