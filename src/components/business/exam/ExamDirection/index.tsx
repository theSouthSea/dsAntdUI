import Section from "@business/Section"
import { ChangeEvent, memo, useEffect, useRef, useState } from "react"

import CardCheckbox, { CheckboxItem } from "@/components/base/CardCheckbox"
import ImgTextCheckboxOpt from "@/components/base/ImgTextCheckbox"
import useForceUpdate from "@/hooks/forceUpdate/useForceUpdate"

import styles from "./index.module.less"

interface ExamDirectionProps {
  title: string
  options: CheckboxItem[]
  value: string[]
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onChange: (value: string[] | number[]) => void
  titleSize?: "middle" | "small" | "large"
  type?: "imgText" | "card"
}
const ExamDirection = (props: ExamDirectionProps) => {
  const { options, value, onChange, title, titleSize = "middle", type = "imgText" } = props
  const Comp = type === "imgText" ? ImgTextCheckboxOpt : CardCheckbox
  const forceUpdate = useForceUpdate()
  const isControlled = value !== undefined
  // const [checkboxList, setCheckbox] = useState(() =>
  //   options.map((item) => {
  //     return {
  //       ...item,
  //       checked: value.includes(item.value as string),
  //     }
  //   }),
  // )
  const checkboxListRef = useRef(
    options.map((item) => {
      return {
        ...item,
        checked: value.includes(item.value as string),
      }
    }),
  )
  checkboxListRef.current = options.map((item) => {
    return {
      ...item,
      checked: value.includes(item.value as string),
    }
  })
  // useEffect(() => {
  //   setCheckbox(options.map(item => {
  //     return {
  //      ...item,
  //       checked: value.includes((item.value as string))
  //     }
  //   }))
  // },[options, value])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target as HTMLInputElement
    const values: string[] = []
    const newCheckboxList = checkboxListRef.current.map((item) => {
      if (item.value === value) {
        item.checked = checked
      }
      if (item.checked) {
        values.push(item.value as string)
      }
      return item
    })
    // onChange(e)
    onChange(values)
    // 这会导致多次渲染，导致页面卡顿
    // setCheckbox((prev) => {
    //   return prev.map((item) => {
    //     return {
    //       ...item,
    //       checked: item.value === value ? checked : item.checked,
    //     }
    //   })
    // })
    // setCheckbox(newCheckboxList)
    // 非受控组件,更新选中的值
    if (!isControlled) {
      checkboxListRef.current = newCheckboxList
      forceUpdate()
    }
  }
  return (
    <Section title={title} titleSize={titleSize}>
      <div className={styles.checkboxBox}>
        {checkboxListRef.current.map((item) => (
          <Comp
            key={item.value}
            checked={item.checked}
            // name="examDirection"
            value={item.value}
            label={item.label}
            onChange={handleChange}
          ></Comp>
        ))}
      </div>
    </Section>
  )
}
export default memo(ExamDirection)
