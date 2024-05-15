import { Button } from "antd"
import { useEffect } from "react"
import { useThrottledCallback } from "use-debounce"

const UseThrottle = () => {
  const updatePosition = (event: any) => {
    console.log("scrolling", event)
  }
  const renewToken = () => {
    console.log("renew token")
  }
  const scrollHandler = useThrottledCallback(updatePosition, 600)
  const throttled = useThrottledCallback(renewToken, 300000, { trailing: false })
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])
  return (
    <div className="h-[100vh] overflow-y-auto">
      <div>UseThrottle scroll demo</div>
      <Button onClick={throttled}>5分钟后重新生成token</Button>
      <div className="h-[200vh] bg-red-800 text-center text-3xl text-green-300">big box</div>
    </div>
  )
}
export default UseThrottle
