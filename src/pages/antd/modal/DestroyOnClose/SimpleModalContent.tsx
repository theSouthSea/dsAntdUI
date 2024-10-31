import { Button } from "antd"

import useCount from "@/hooks/counter/useCount"

const SimpleModalContent = () => {
  const { count, increment, decrement } = useCount()
  console.log("SimpleModalContent-render-count=", count)
  return (
    <div>
      <h1>SimpleModalContent</h1>
      <p>
        <Button type="primary" onClick={increment}>
          +1
        </Button>
        <span>count:{count}</span>
        <Button type="default" onClick={decrement}>
          -1
        </Button>
      </p>
    </div>
  )
}
export default SimpleModalContent
