import { Input } from "antd"
import { KeyboardEvent, useState } from "react"

const BaseInput = () => {
  const [value, setValue] = useState<string>(``)
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e)
    const inputValue = e.target.value
    if (e.key === `Enter`) {
      if (inputValue) {
        console.log(inputValue)
        setValue(inputValue)
        e.target.value = ""
      }
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e)
    if (e.target.value) {
      setValue(e.target.value)
      e.target.value = ""
    }
  }
  return (
    <>
      <div>BaseInput</div>
      <div>输入框的值:{value}</div>
      <Input onPressEnter={handleEnter} defaultValue="" onBlur={handleBlur}></Input>
      <Input onPressEnter={handleEnter} value={value} onBlur={handleBlur}></Input>
      <Input value={value} onChange={handleChange} onBlur={handleBlur}></Input>
    </>
  )
}
export default BaseInput
