import { SyntheticEvent, useEffect, useMemo, useRef } from "react"
import { throttle } from "lodash-es"

export const useThrottle = (callback: (event: any) => void, timeout = 1000) => {
  const ref = useRef<any>()

  useEffect(() => {
    ref.current = callback
  }, [callback])

  const throttleCallback = useMemo(() => {
    const func = (...args: any[]) => {
      ref.current?.(...args)
    }
    // const func = ref.current || (() => {});
    // console.log("func", func, ref.current);

    return throttle(func, timeout)
  }, [timeout])

  return throttleCallback
}
