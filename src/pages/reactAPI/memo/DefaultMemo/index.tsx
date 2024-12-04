import { Button, Input } from "antd"
import { ChangeEvent, useState } from "react"

import useCount from "@/hooks/counter/useCount"

import Child from "./Child"

const DefaultMemo = () => {
  const { count, setCount, increment, decrement } = useCount()
  const [slogan, setSlogan] = useState("")
  const handleChange = (val: number) => {
    console.log("change-val=", val)
    setCount(val)
  }
  const handleSloganChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSlogan(e.target.value)
  }
  return (
    <>
      <div>DefaultMemo</div>
      <div>
        <Button onClick={decrement} type="primary">
          -
        </Button>
        <span>{count}</span>
        <Button onClick={increment} type="primary">
          +
        </Button>
      </div>
      <Input value={slogan} onChange={handleSloganChange}></Input>
      <Child count={count} onChange={handleChange}></Child>
    </>
  )
}
export default DefaultMemo
