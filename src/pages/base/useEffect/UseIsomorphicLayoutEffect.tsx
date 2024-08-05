import { useState } from "react"

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect"

const UseIsomorphicLayoutEffect = () => {
  const [activeStyle, setActiveStyle] = useState({
    width: 100,
    height: 100,
    background: "#f00",
  })
  useIsomorphicLayoutEffect(() => {
    console.log("UseIsomorphicLayoutEffect")
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight
    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight
    console.log("document-clientWidth=", clientWidth)
    console.log("clientHeight=", clientHeight)
    console.log("window.innerWidth=", innerWidth)
    console.log("window.innerHeight=", innerHeight)
    setActiveStyle({
      width: clientWidth / 2,
      height: clientHeight / 2,
      background: "#0f0",
    })
  }, [])
  return (
    <div>
      <h2>useIsomorphicLayoutEffect</h2>
      <div style={{ ...activeStyle }}></div>
    </div>
  )
}
export default UseIsomorphicLayoutEffect
