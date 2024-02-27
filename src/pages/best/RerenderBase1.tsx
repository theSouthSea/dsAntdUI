import { Button } from "antd"
import { memo, useState } from "react"

const Child = ({ setCount }: { setCount: React.Dispatch<React.SetStateAction<number>> }) => {
  console.log("Child")
  return (
    <>
      <div>子组件</div>
      <div>
        <Button type="primary" danger onClick={() => setCount((count) => count - 1)}>
          减一
        </Button>
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          加一
        </Button>
        <Button type="default" onClick={() => setCount((count) => count)}>
          count不变
        </Button>
      </div>
    </>
  )
}
// 父组件更新,如果子组件不用memo包裹,子组件也会重渲染
const MemoChild = memo(Child)
const RerenderBase = () => {
  const [count, setCount] = useState(0)
  console.log("父组件")
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
      {/* <Child setCount={setCount}></Child> */}
      <MemoChild setCount={setCount}></MemoChild>
    </div>
  )
}
export default RerenderBase
