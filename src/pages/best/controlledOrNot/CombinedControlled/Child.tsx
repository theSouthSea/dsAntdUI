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
  return (
    <input
      value={localVal}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (!isControlled) {
          setLocalVal(value)
        }
        onChange && onChange(value)
      }}
    ></input>
  )
}
export default Child
