import ExamDirection from "@business/exam/ExamDirection"
import QuestionDifficulty, { IDifficulty } from "@business/exam/QuestionDifficulty"
import { Button } from "antd"
import { ChangeEvent, useState } from "react"

import FieldInfo from "@/components/base/FieldInfo"
import CustomModal from "@/components/base/Modal/CustomModal"

export const examDirectionList = [
  {
    id: 1,
    name: "examDirection",
    label: "定义理解",
    value: "define",
    checked: false,
  },
  {
    id: 2,
    name: "examDirection",
    label: "概念辨析",
    value: "discriminate",
    checked: false,
  },
  {
    id: 3,
    name: "examDirection",
    label: "场景应用",
    value: "application",
    checked: false,
  },
]
const CustomModalDemo = () => {
  const [open, setOpen] = useState(false)
  const [difficulty, setDifficulty] = useState<IDifficulty>("medium")
  const [checkedValue, setCheckedValue] = useState<string[]>([])
  const handleDifficulty = (value: IDifficulty) => {
    setDifficulty(value)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  const handleOk = () => {
    setOpen(false)
  }
  const handleExamDirectionChange = (value: string[] | number[]) => {
    setCheckedValue(value as string[])
  }
  return (
    <>
      <CustomModal
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        title="重新出题"
        okText="确认"
        cancelText="取消"
      >
        <FieldInfo name="选择难度">
          <QuestionDifficulty value={difficulty} onChange={handleDifficulty}></QuestionDifficulty>
        </FieldInfo>
        <ExamDirection
          title="考核方向"
          options={examDirectionList}
          value={checkedValue}
          onChange={handleExamDirectionChange}
        ></ExamDirection>
      </CustomModal>
      <Button onClick={() => setOpen(true)}>打开弹框</Button>
    </>
  )
}
export default CustomModalDemo
