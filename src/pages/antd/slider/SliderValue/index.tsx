import { Slider, SliderSingleProps } from "antd"
import { useState } from "react"

import styles from "./index.module.less"

const marks: SliderSingleProps["marks"] = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100°C</strong>,
  },
}
const SliderValue = () => {
  const [value, setValue] = useState(37)
  const handleChange = (value: number) => {
    // console.log("handleChange-e=", e)
    setValue(value)
  }
  return (
    <div className={styles.box}>
      <div className={styles.label}>温度</div>
      <Slider
        marks={marks}
        step={null}
        defaultValue={37}
        onChange={handleChange}
        className={styles.slider}
      />
      <div className={styles.label}>{value}</div>
    </div>
  )
}
export default SliderValue
