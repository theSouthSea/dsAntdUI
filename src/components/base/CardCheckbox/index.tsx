import { ChangeEvent } from "react"

import styles from "./index.module.less"

export interface CheckboxItem {
  value: string | number
  label: string | number
  checked?: boolean
  icon?: React.ReactNode
  id?: string | number
  name?: string
  disabled?: boolean
}
export interface CardCheckboxProps extends CheckboxItem {
  direction?: "horizontal" | "vertical"
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
const CardCheckbox = (props: CardCheckboxProps) => {
  const {
    id,
    name,
    value,
    label,
    icon,
    direction = "horizontal",
    disabled = false,
    onChange,
  } = props
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }
  return (
    <div className={styles.cardBox}>
      <input
        type="checkbox"
        id={String(id)}
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleChange}
      />
      <label htmlFor={String(id)} className={styles[direction]}>
        {icon && <div className={styles.iconBox}>{icon}</div>}
        <div className={styles.labelBox}>{label}</div>
      </label>
    </div>
  )
}
export default CardCheckbox
