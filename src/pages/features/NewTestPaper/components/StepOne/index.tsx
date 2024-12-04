import FooterButtons from "@business/buttons/FooterButtons"

import CourseAssets from "./components/CourseAssets"
import TestPaperConfig from "./components/TestPaperConfig"
import styles from "./index.module.less"

interface StepOneProps {
  show: boolean
  onSuccess: () => void
}
const footerStyle = { marginTop: 20, marginBottom: 20 }
const StepOne = (props: StepOneProps) => {
  const { onSuccess, show } = props
  const handleNext = () => {
    console.log("next")
    onSuccess()
  }
  const handleSave = () => {
    console.log("save")
    // onSuccess()
  }
  return (
    <div style={{ display: show ? "block" : "none" }} className={styles.container}>
      <div className={styles.main}>
        <TestPaperConfig className={styles.leftBox}></TestPaperConfig>
        <CourseAssets className={styles.rightBox}></CourseAssets>
      </div>
      <FooterButtons
        primaryText="下一步"
        onPrimaryClick={handleNext}
        secondText="保存"
        onSecondClick={handleSave}
        style={footerStyle}
      ></FooterButtons>
    </div>
  )
}
export default StepOne
