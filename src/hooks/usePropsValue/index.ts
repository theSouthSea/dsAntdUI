/* setState支持传入更新函数 */
import { SetStateAction, useRef, useState } from "react"
/* 加入defaultValue */
type Option<T> = {
  value?: T
  defaultValue?: T
  onChange?: (value: T) => void
}
export const usePropsValue = <T>(option: Option<T>) => {
  console.log("usePropsValue-run=")
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
  const setValue = (v: SetStateAction<T>) => {
    const nextValue =
      typeof v === "function" ? (v as (prev: T) => T)(localValueRef.current as T) : v
    if (nextValue === localValueRef.current) return
    localValueRef.current = nextValue
    update()
    onChange && onChange(nextValue)
  }
  return [localValueRef.current, setValue] as const
}
