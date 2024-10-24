import { useEffect, useRef, useState } from "react"

interface ChildProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}
let count = 0
const Child = (props: ChildProps) => {
  const { value, defaultValue, onChange } = props
  const isControlled = value !== undefined
  const localVal = useRef(defaultValue || value)
  if (isControlled) {
    localVal.current = value
  }
  // const finalValue = isControlled ? value : localVal.current;
  const [, forceUpdate] = useState(0)
  function update() {
    forceUpdate((prev) => prev + 1)
  }
  console.log("Child-render=", ++count)
  return (
    <input
      // value={finalValue}
      value={localVal.current}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        localVal.current = value
        update()
        onChange && onChange(value)
      }}
    ></input>
  )
}
export default Child
