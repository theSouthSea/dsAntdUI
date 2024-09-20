import { Slider, SliderSingleProps } from "antd"

import styles from "./index.module.less"

const marks: SliderSingleProps["marks"] = {
  0: "低",
  50: "中",
  100: "高",
  // 100: {
  //   style: {
  //     color: '#f50',
  //   },
  //   label: <strong>100°C</strong>,
  // },
}
const QuestionDifficulty = () => {
  return (
    <div className={styles.container}>
      <span>难度</span>
      <Slider defaultValue={50} className={styles.sliderBox} marks={marks} step={null} />
    </div>
  )
}
export default QuestionDifficulty
