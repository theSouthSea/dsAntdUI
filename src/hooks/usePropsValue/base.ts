import { useRef, useState } from "react"

type Option<T> = {
  value?: T
  onChange?: (value: T) => void
}
export const usePropsValue = <T>(option: Option<T>) => {
  const { value, onChange } = option
  const localValueRef = useRef<T | undefined>(value)
  const [, forceUpdate] = useState(0)
  const isControlled = value !== undefined
  if (isControlled) {
    localValueRef.current = value
  }
  const update = () => {
    forceUpdate((prev) => prev + 1)
  }
  const setValue = (val: T) => {
    localValueRef.current = val
    update()
    onChange && onChange(val)
  }
  return [localValueRef.current, setValue] as const
}
