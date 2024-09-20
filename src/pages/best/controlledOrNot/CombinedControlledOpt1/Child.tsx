import { useEffect, useState } from "react"

interface ChildProps {
  value?: string
  onChange?: (value: string) => void
}
const Child = (props: ChildProps) => {
  const { value, onChange } = props
  const isControlled = value !== undefined
  const [localVal, setLocalVal] = useState(value)
  useEffect(() => {
    if (!isControlled) {
      setLocalVal(value)
    }
  }, [value, isControlled])
  const finalValue = isControlled ? value : localVal
  return (
    <input
      value={finalValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setLocalVal(value)
        onChange && onChange(value)
      }}
    ></input>
  )
}
export default Child
