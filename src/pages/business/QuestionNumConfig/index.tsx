import QuestionDifficulty from "@business/QuestionDifficulty"
import QuestionNum from "@business/QuestionNum"

import styles from "./index.module.less"

const QuestionNumConfig = () => {
  return (
    <div className={styles.container}>
      <QuestionNum name="选择题" score={60} number={15}></QuestionNum>
      <QuestionDifficulty></QuestionDifficulty>
    </div>
  )
}
export default QuestionNumConfig
