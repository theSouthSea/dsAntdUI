import RainSvg from "@/assets/svg/weather/小雨.svg?react"
import SunnySvg from "@/assets/svg/weather/晴天.svg?react"
import ImgTextCheckboxDemo from "@/pages/base/checkbox/ImgTextCheckbox"

import styles from "./index.module.less"

const Child1 = () => {
  return (
    <div className={styles.scrollBox}>
      <div>
        <SunnySvg></SunnySvg>
      </div>
      <div>
        <RainSvg></RainSvg>
      </div>
      <div className={styles.item}>box1</div>
      <div className={styles.item}>box2</div>
      <div className={styles.item}>box3</div>
      <ImgTextCheckboxDemo></ImgTextCheckboxDemo>
    </div>
  )
}
export default Child1
