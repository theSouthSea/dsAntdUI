import { Button } from "antd"

import { useGrandAPIContext, useGrandCountContext } from "./GrandParentChildProvider"

const GrandParentChild = () => {
  // const { count, setCount } = useGrandContext()
  console.log("Grand")
  // 设置同一个state,组件会更新吗? 不会
  return (
    <div>
      <p>组件在什么时候会重渲染?</p>
      <Parent></Parent>
      <OtherParent></OtherParent>
    </div>
  )
}
const OtherParent = () => {
  const { setCount } = useGrandAPIContext()
  const count = useGrandCountContext()
  console.log("OtherParent")
  // 设置同一个state,组件会更新吗? 不会
  const handleMinus = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <p>另一个父级组件</p>
      <div>
        {/* <Button type="primary" danger onClick={() => setCount(count - 1)}>
          减一
        </Button> */}
        <button onClick={() => setCount(count - 1)}>减一</button>
        <button onClick={handleMinus}>减一</button>
        <span>count:{count}</span>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          加一
        </Button>
        <Button type="default" onClick={() => setCount(count)}>
          count不变
        </Button>
      </div>
    </div>
  )
}
const Parent = () => {
  console.log("Parent")
  return (
    <div>
      <div>父组件</div>
      <Child></Child>
    </div>
  )
}
const Child = () => {
  const count = useGrandCountContext()
  console.log("child")
  return (
    <div>
      <div>子组件</div>
      <div>count:{count}</div>
    </div>
  )
}
export default GrandParentChild
