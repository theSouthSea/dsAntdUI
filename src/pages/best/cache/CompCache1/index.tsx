import { Button } from "antd"
import React, { useState } from "react"

import withCache from "@/hocs/withCache"

const MyComponent = ({ name }) => {
  return <div>Hello, {name}!</div>
}

const BaseCacheComp = withCache(MyComponent)
const Count = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        add
      </button>
    </>
  )
}
const CachedCount = withCache(Count)
const CompCache1 = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <BaseCacheComp name="BaseCacheComp" isShow></BaseCacheComp>
      <Button
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        {isShow ? "hide" : "show"} Count Comp
      </Button>
      <CachedCount isShow={isShow}></CachedCount>
    </>
  )
}
export default CompCache1
