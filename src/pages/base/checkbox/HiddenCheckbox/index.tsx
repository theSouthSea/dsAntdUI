import { useRef, useState } from "react"

import styles from "./index.module.less"

const HiddenCheckbox = () => {
  const ref = useRef<HTMLInputElement>(null)
  const handleCheckboxVal = () => {
    const val = ref.current?.value
    const checked = ref.current?.checked
    console.log("val=", val)
    console.log("checked=", checked)
  }
  const [isChecked, setIsChecked] = useState<boolean>(true)
  const handleCheckboxChange = () => {
    console.log("isChecked=", isChecked)
    setIsChecked(!isChecked)
  }
  return (
    <>
      <div>HiddenCheckbox</div>
      <div>
        <p>非受控组件</p>
        <input
          type="radio"
          name="type"
          id="adviceRadio1"
          value="1"
          defaultChecked
          hidden
          ref={ref}
        />
        <label htmlFor="adviceRadio1" className={styles.advice}>
          采纳建议
        </label>
      </div>
      <div>
        <p>受控组件</p>
        <input
          type="radio"
          name="measure"
          id="runMeasure"
          value="1"
          checked={isChecked}
          hidden
          // onChange={handleCheckboxChange}
        />
        <label htmlFor="runMeasure" className={styles.advice} onClick={handleCheckboxChange}>
          执行政策
        </label>
      </div>
      <div>
        <button onClick={handleCheckboxVal}>获取Checkbox的值</button>
      </div>
    </>
  )
}
export default HiddenCheckbox
