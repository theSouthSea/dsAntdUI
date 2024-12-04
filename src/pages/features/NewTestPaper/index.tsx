import { AppstoreOutlined } from "@ant-design/icons"
import Header from "@business/header/Header"
import IconText from "@business/header/Header/iconText/IconText"
import { Steps } from "antd"
import { useCallback, useMemo } from "react"

import { getTestPaperInfoFormUrl } from "@/utils/urlUtil"

import StepOne from "./components/StepOne"
import StepThree from "./components/StepThree"
import StepTwo from "./components/StepTwo"
import styles from "./index.module.less"
import { creatNewTestPaperStore } from "./store"

const STEP_ITEMS = [
  {
    title: "基础配置",
    icon: 1,
  },
  {
    title: "策略配置",
    icon: 2,
  },
  {
    title: "试题管理",
    icon: 3,
  },
]
const NewTestPaper = () => {
  const { courseId, courseName, examId } = getTestPaperInfoFormUrl()
  const newTestPaperStore = creatNewTestPaperStore(courseId, courseName, examId)
  const currentStep = newTestPaperStore.currentStep
  const handleManageClick = () => {
    console.log("handleManageClick")
  }
  const handleSuccess = useCallback(() => {
    if (currentStep < 2) {
      // newTestPaperStore.currentStep = currentStep + 1;
      newTestPaperStore.currentStep = currentStep + 1
    } else {
      newTestPaperStore.currentStep = 0
    }
  }, [currentStep, newTestPaperStore])
  const currentItemJsx = useMemo(() => {
    return (
      <div className={styles.content}>
        <StepOne onSuccess={handleSuccess} show={currentStep === 0}></StepOne>
        <StepTwo onSuccess={handleSuccess} show={currentStep === 1}></StepTwo>
        <StepThree onSuccess={handleSuccess} show={currentStep === 1}></StepThree>
      </div>
    )
  }, [currentStep])
  return (
    <div className={styles.pageContainer}>
      <Header
        title="新增试卷"
        right={
          <IconText
            icon={<AppstoreOutlined />}
            text="试卷管理"
            onClick={handleManageClick}
          ></IconText>
        }
      >
        <Steps size="small" current={newTestPaperStore.currentStep} items={STEP_ITEMS}></Steps>
      </Header>
      {currentItemJsx}
    </div>
  )
}
export default NewTestPaper
