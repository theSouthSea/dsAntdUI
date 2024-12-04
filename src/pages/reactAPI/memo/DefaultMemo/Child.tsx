import { Button } from "antd"
import { memo } from "react"

let renderCount = 0
const Child = (props) => {
  const { count, onChange } = props
  console.log("render-Child-renderCount=", ++renderCount)
  return (
    <>
      <div>Child</div>
      <div>Count: {count}</div>
      <Button onClick={() => onChange(count + 1)}>Increase</Button>
    </>
  )
}
export default memo(Child)
