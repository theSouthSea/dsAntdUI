import { ReactElement } from "react"

import styles from "./index.module.less"

interface ImgTextCheckboxProps {
  id: string
  name: string
  value: string
  checked?: boolean
  label: string
  icon?: ReactElement
  className?: string
  type?: "checkbox" | "radio"
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const ImgTextCheckbox = (props: ImgTextCheckboxProps) => {
  const { id, name, value, type = "checkbox", className, checked, label, icon, onChange } = props
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.checked)
    onChange?.(e)
  }
  const labelEle = icon ? (
    <>
      {icon}
      {label}
    </>
  ) : (
    label
  )
  const checkboxContainerClass = className ? `${styles.imgTextBox} ${className}` : styles.imgTextBox
  return (
    <div className={checkboxContainerClass}>
      <input type={type} name={name} value={value} checked={checked} onChange={handleChange} />
      <label htmlFor={id} className={checked ? styles.checked : ""}>
        {labelEle}
      </label>
    </div>
  )
}
export default ImgTextCheckbox
