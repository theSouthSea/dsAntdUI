import { Button } from "antd"
import { useState } from "react"

const GrandParentChild = () => {
  const [count, setCount] = useState(0)
  console.log("Grand")
  // 设置同一个state,组件会更新吗? 不会
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
        <Button type="default" onClick={() => setCount(count)}>
          count不变
        </Button>
      </div>
      <Parent count={count}></Parent>
    </div>
  )
}
const Parent = ({ count }: { count: number }) => {
  console.log("Parent")
  return (
    <div>
      <div>父组件</div>
      <Child count={count}></Child>
    </div>
  )
}
const Child = ({ count }: { count: number }) => {
  console.log("child")
  return (
    <div>
      <div>子组件</div>
      <div>count:{count}</div>
    </div>
  )
}
export default GrandParentChild
