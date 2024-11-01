import Section from "@business/Section"
import { Input } from "antd"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react"

const { TextArea } = Input
export interface EditContentRef {
  getValue: () => string
}
interface EditContentProps {
  value: string
}
const EditContent = forwardRef<EditContentRef, EditContentProps>((props, ref) => {
  const { value: propsValue } = props
  const [value, setValue] = useState(propsValue)
  // useEffect(() => {
  //   setValue(propsValue)
  // }, [propsValue])
  useImperativeHandle(
    ref,
    () => ({
      getValue: () => {
        console.log("useImperativeHandle-value=", value)
        return value
      },
    }),
    [value],
  )
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    // console.log("value", value)
    setValue(value)
  }
  return (
    <Section title="课程解析">
      <TextArea
        autoSize={{
          minRows: 6,
          maxRows: 10,
        }}
        onChange={handleChange}
        placeholder="请输入课程解析"
        value={value}
      ></TextArea>
    </Section>
  )
})
export default EditContent
