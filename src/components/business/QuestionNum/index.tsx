import { InputNumber } from "antd"

import styles from "./index.module.less"

interface QuestionNumProps {
  name: string
  score: number
  number: number
}
const QuestionNum = (props: QuestionNumProps) => {
  const { name, score, number } = props
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.inputGroup}>
        <InputNumber addonAfter="分" style={{ width: 90 }} defaultValue={score} />
        <InputNumber addonAfter="题" style={{ width: 90 }} defaultValue={number} />
      </div>
    </div>
  )
}
export default QuestionNum
