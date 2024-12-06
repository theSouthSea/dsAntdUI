import { Button, Input } from "antd"
import { ChangeEvent, useRef, useState } from "react"

import Child, { ChildRef } from "./Child"

let renderCount = 0
const RefUpdate = () => {
  const childRef = useRef<ChildRef>(null)
  const [content, setContent] = useState("好好学习")
  console.log("RefUpdate-renderCount=", ++renderCount)
  const getLatestContent = () => {
    if (childRef.current) {
      const latestContent = childRef.current.value
      console.log("latestContent=", latestContent)
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }
  return (
    <>
      <div>RefUpdate</div>
      <div>{content}</div>
      <Input onChange={handleChange} value={content}></Input>
      <Button onClick={getLatestContent}>获取最新的Content</Button>
      <Child ref={childRef} content={content}></Child>
    </>
  )
}
export default RefUpdate
