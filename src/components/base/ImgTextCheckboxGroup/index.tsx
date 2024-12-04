import { CheckboxItem } from "../CardCheckbox"
import ImgTextCheckbox from "../ImgTextCheckbox"
import styles from "./index.module.less"

type ImgTextCheckboxGroupProps = {
  className?: string
  list: CheckboxItem[]
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const ImgTextCheckboxGroup = (props: ImgTextCheckboxGroupProps) => {
  const { className, list, onChange, disabled = false } = props
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {list.map((item) => {
        return (
          <ImgTextCheckbox
            key={item.value}
            label={item.label}
            value={item.value}
            icon={item.icon}
            onChange={onChange}
            checked={item.checked}
            disabled={disabled}
          ></ImgTextCheckbox>
        )
      })}
    </div>
  )
}
export default ImgTextCheckboxGroup
