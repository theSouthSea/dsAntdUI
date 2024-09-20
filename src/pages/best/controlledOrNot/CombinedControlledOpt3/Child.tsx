import { usePropsValue } from "@/hooks/usePropsValue"

interface ChildProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}
const Child = (props: ChildProps) => {
  const { defaultValue, onChange } = props
  const [localVal, setState] = usePropsValue({
    defaultValue,
    onChange,
  })
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
export default Child
