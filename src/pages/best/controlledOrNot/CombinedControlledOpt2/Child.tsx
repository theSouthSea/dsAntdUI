import { useEffect, useRef, useState } from "react"

interface ChildProps {
  value?: string
  onChange?: (value: string) => void
}
const Child = (props: ChildProps) => {
  const { value, onChange } = props
  const isControlled = value !== undefined
  const localVal = useRef(value)
  if (isControlled) {
    localVal.current = value
  }
  // const finalValue = isControlled ? value : localVal.current;
  const [, forceUpdate] = useState(0)
  function update() {
    forceUpdate((prev) => prev + 1)
  }
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
