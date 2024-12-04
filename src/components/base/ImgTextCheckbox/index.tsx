import { ReactNode } from "react"

import styles from "./index.module.less"

export type CheckboxItem = {
  name?: string
  value: string | number
  checked?: boolean
  label: string | number
  icon?: ReactNode
  disabled?: boolean
}
export type ImgTextCheckboxProps = CheckboxItem & {
  className?: string
  type?: "checkbox" | "radio"
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
// 去掉id是为了避免命名冲突
// 增加type:radio,name属性是为了方便在试卷各个题型编号中跳转,并且只能选中一个题目
// checked改成可选的,就不需要在选中一个题时,将其他题目设置为false
const ImgTextCheckbox = (props: ImgTextCheckboxProps) => {
  const {
    name,
    value,
    type = "checkbox",
    className,
    checked,
    label,
    icon,
    disabled = false,
    onChange,
  } = props
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
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <label className={checked ? styles.checked : ""}>{labelEle}</label>
    </div>
  )
}
export default ImgTextCheckbox
