import { useRef, useState } from "react"
/* 加入defaultValue */
type Option<T> = {
  value?: T
  defaultValue: T
  onChange?: (value: T) => void
}
export const usePropsValue = <T>(option: Option<T>) => {
  const { value, defaultValue, onChange } = option
  const isControlled = value !== undefined
  const localValueRef = useRef<T | undefined>(isControlled ? value : defaultValue)
  const [, forceUpdate] = useState(0)
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
