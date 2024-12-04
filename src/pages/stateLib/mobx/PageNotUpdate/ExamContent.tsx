import Section from "@business/Section"
import TextArea from "antd/es/input/TextArea"
import { ChangeEvent, memo } from "react"

type ExamContentProps = {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
}
const ExamContent = (props: ExamContentProps) => {
  const { value, onChange, disabled = false } = props
  return (
    <Section title="考核内容">
      <TextArea value={value} onChange={onChange} disabled={disabled}></TextArea>
    </Section>
  )
}
export default memo(ExamContent)
