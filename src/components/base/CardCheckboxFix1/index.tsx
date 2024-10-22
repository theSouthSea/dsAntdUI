import { ChangeEvent, useEffect, useRef, useState } from "react"

import styles from "./index.module.less"

export interface CardCheckboxProps {
  // id: string
  // name: string
  value: string
  label: string
  icon?: React.ReactNode
  direction?: "horizontal" | "vertical"
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
// 如何解决封装受控组件时，受控组件设置了一次状态，父组件又设置了一次状态，导致受控组件多了一次渲染的问题
const CardCheckbox = (props: CardCheckboxProps) => {
  const { value, label, icon, checked = false, direction = "horizontal", onChange } = props
  const [isChcked, setIschecked] = useState(checked)
  const isChckedRef = useRef(isChcked)
  isChckedRef.current = isChcked
  useEffect(() => {
    if (typeof checked === "boolean" && checked !== isChckedRef.current) {
      setIschecked(checked)
    }
  }, [checked])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    if (checked) {
      setIschecked(true)
    } else {
      setIschecked(false)
    }
    onChange && onChange(e)
  }
  return (
    <div className={styles.cardBox}>
      <label className={`${styles[direction]} ${isChcked ? styles.checked : ""}`}>
        <input type="checkbox" value={value} onChange={handleChange} />
        {icon && <div className={styles.iconBox}>{icon}</div>}
        <div className={styles.labelBox}>{label}</div>
      </label>
    </div>
  )
}
export default CardCheckbox
