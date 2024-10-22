import { useState } from "react"

import { usePropsValue } from "@/hooks/usePropsValue"

interface ChildProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}
const Child = (props: ChildProps) => {
  const { defaultValue, onChange, value } = props
  const [localVal, setState] = usePropsValue({
    defaultValue,
    onChange,
    value,
  })
  console.log("child-render")
  return (
    <input
      // value={finalValue}
      value={localVal}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setState(value)
      }}
    ></input>
  )
}
export default function App() {
  const [value, setValue] = useState("123")
  const handleChange = (value: string) => {
    setValue(value)
  }
  console.log("App render")
  return (
    <div>
      <Child value={value} onChange={handleChange} />
    </div>
  )
}
