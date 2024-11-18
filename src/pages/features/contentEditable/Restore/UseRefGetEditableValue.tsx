import { ChangeEvent, forwardRef, useImperativeHandle, useRef } from "react"

interface IRef {
  getValue: () => string
}
interface CompProps {
  defaultValue: string
  onChange: (val: string) => void
}
const UseRefGetEditableValue = forwardRef<IRef, CompProps>((props, ref) => {
  const { defaultValue, onChange } = props
  const editableEleRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(
    ref,
    () => ({
      getValue: () => {
        return editableEleRef.current?.innerText || ""
      },
    }),
    [],
  )
  const handleChange = (e: ChangeEvent<HTMLDivElement>) => {
    const currentValue = editableEleRef.current?.innerText || ""
    if (onChange) {
      onChange(currentValue)
    }
  }
  return (
    <>
      <div>UseRefGetEditableValue</div>
      <div contentEditable="true" ref={editableEleRef} onInput={handleChange} onBlur={handleChange}>
        {defaultValue}
      </div>
    </>
  )
})
export default UseRefGetEditableValue
