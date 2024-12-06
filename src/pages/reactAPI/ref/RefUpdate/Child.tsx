import { Input } from "antd"
import { ChangeEvent, forwardRef, memo, useEffect, useImperativeHandle, useState } from "react"

export type ChildRef = {
  value: string
}
interface ChildProps {
  content: string
  onChange?: (val: string) => void
}
const Child = forwardRef<ChildRef, ChildProps>((props, ref) => {
  const { content, onChange } = props
  const [value, setValue] = useState(content)
  useEffect(() => {
    setValue(content)
  }, [content])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange?.(e.target.value)
  }
  useImperativeHandle(
    ref,
    () => ({
      value,
    }),
    [value],
  )
  return (
    <>
      <div>Child</div>
      <Input value={value} onChange={handleChange}></Input>
    </>
  )
})
// 为forwardRef组件添加名字，方便调试
Child.displayName = "Child"
// 为memo组件添加名字，方便调试
const MemoChild = memo(Child)
MemoChild.displayName = "MemoChild"
export default MemoChild
