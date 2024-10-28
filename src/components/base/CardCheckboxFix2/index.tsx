import { ChangeEvent, useRef, useState } from "react"

import styles from "./index.module.less"

export interface CheckboxItem {
  value: string | number
  label: string | number
  checked?: boolean
  icon?: React.ReactNode
  id?: string | number
  name?: string
}
export interface CardCheckboxProps extends CheckboxItem {
  direction?: "horizontal" | "vertical"
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
}
// 如何解决封装受控组件时，受控组件设置了一次状态，父组件又设置了一次状态，导致受控组件多了一次渲染的问题
const CardCheckbox = (props: CardCheckboxProps) => {
  const {
    value,
    label,
    icon,
    checked,
    direction = "horizontal",
    defaultChecked = false,
    onChange,
  } = props
  // const [isChcked, setIschecked] = useState(checked)
  const isControlled = checked !== undefined
  const isChckedRef = useRef(defaultChecked)
  isChckedRef.current = isControlled ? checked : defaultChecked
  /* 第一种:强制更新页面的方法 */
  const [, setCount] = useState(0)
  const forceUpdate = () => {
    setCount((count) => count + 1)
  }
  /* 第一种:强制更新页面的方法 */
  // const [,forceUpdate] = useState({});
  // const finalValue = isControlled? value : localVal
  // isChckedRef.current = isChcked
  // useEffect(() => {
  //   if (typeof checked === "boolean" && checked !== isChckedRef.current) {
  //     setIschecked(checked)
  //   }
  // }, [checked])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    // if (checked) {
    //   setIschecked(true)
    // } else {
    //   setIschecked(false)
    // }
    isChckedRef.current = checked
    if (!isControlled) {
      forceUpdate()
    }
    onChange && onChange(e)
  }
  return (
    <div className={styles.cardBox}>
      <label className={`${styles[direction]} ${isChckedRef.current ? styles.checked : ""}`}>
        <input type="checkbox" value={value} onChange={handleChange} />
        {icon && <div className={styles.iconBox}>{icon}</div>}
        <div className={styles.labelBox}>{label}</div>
      </label>
    </div>
  )
}
export default CardCheckbox
