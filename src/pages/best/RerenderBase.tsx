import { useState } from "react"
import { Button } from "antd"
const Child = () => {
  console.log("Child")
  return <div>子组件</div>
}
const RerenderBase = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>组件在什么时候会重渲染?</p>
      <div>
        <Button type="primary" danger onClick={() => setCount(count - 1)}>
          减一
        </Button>
        <span>count:{count}</span>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          加一
        </Button>
      </div>
      <Child></Child>
    </div>
  )
}
export default RerenderBase
