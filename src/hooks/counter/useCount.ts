import { useState } from "react"

const useCount = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const doubleIncrement = () => {
    setCount(count * 2)
  }
  return {
    count,
    setCount,
    increment,
    decrement,
    doubleIncrement,
  }
}
export default useCount
