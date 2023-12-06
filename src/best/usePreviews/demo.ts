import { useRef, useEffect } from 'react'

export const usePreviousStandard = <TValue extends unknown>(value: TValue) => {
  const ref = useRef<TValue>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const usePreviousPersistent = <TValue extends unknown>(value: TValue) => {
  const ref = useRef<{ value: TValue; prev: TValue | null }>({
    value: value,
    prev: null,
  })

  const current = ref.current.value

  if (value !== current) {
    ref.current = {
      value: value,
      prev: current,
    }
  }

  return ref.current.prev
}

export const usePreviousPersistentWithMatcher = <TValue extends unknown>(
  value: TValue,
  isEqualFunc: (prev: TValue, next: TValue) => boolean
) => {
  const ref = useRef<{ value: TValue; prev: TValue | null }>({
    value: value,
    prev: null,
  })

  const current = ref.current.value

  if (isEqualFunc ? !isEqualFunc(current, value) : value !== current) {
    ref.current = {
      value: value,
      prev: current,
    }
  }

  return ref.current.prev
}
