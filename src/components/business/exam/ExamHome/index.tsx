import { useLocation, useNavigate } from "react-router-dom"

import Header from "@/components/base/Header"

import ExamProvider, { useExamIsEditContext } from "../ExamProvider"
import styles from "./index.module.less"

const ExamHome = () => {
  const isEdit = useExamIsEditContext()
  const navigate = useNavigate()
  const handleBackOk = () => {
    navigate(-1)
  }
  return (
    <div className={styles.pageContainer}>
      <Header title={isEdit ? "试卷编辑" : "试卷详情"} onOk={handleBackOk}></Header>
    </div>
  )
}
export default function App() {
  return (
    <ExamProvider>
      <ExamHome></ExamHome>
    </ExamProvider>
  )
}
