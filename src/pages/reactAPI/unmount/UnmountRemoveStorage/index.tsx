import { Button } from "antd"
import { useEffect } from "react"

import useCount from "@/hooks/counter/useCount"

const UnmountRemoveStorage = () => {
  const { count, increment, decrement } = useCount()
  console.log("render-count=", count)
  useEffect(() => {
    localStorage.setItem("count", count.toString())
    console.log("useEffect-update-count=", count)
    return () => {
      console.log("unmount-count=", count)
      localStorage.removeItem("count")
    }
  }, [count])
  return (
    <>
      <div>UnmountRemoveStorage</div>
      <div>
        <Button type="primary" onClick={decrement}>
          -
        </Button>
        <span>{count}</span>
        <Button type="primary" onClick={increment}>
          +
        </Button>
      </div>
    </>
  )
}
export default UnmountRemoveStorage
