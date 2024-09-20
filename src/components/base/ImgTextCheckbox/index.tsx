import styles from "./index.module.less"

interface ImgTextCheckboxProps {
  id: string
  name: string
  value: string
  checked?: boolean
  label: string
  icon?: SVGRectElement
}
const ImgTextCheckbox = (props: ImgTextCheckboxProps) => {
  const { id, name, value, checked, label, icon } = props
  const labelEle = icon ? (
    <>
      {icon}
      {label}
    </>
  ) : (
    label
  )
  return (
    <div className={styles.imgTextBox}>
      <input type="checkbox" name={name} id={id} value={value} />
      <label htmlFor={id}>{labelEle}</label>
    </div>
  )
}
export default ImgTextCheckbox
