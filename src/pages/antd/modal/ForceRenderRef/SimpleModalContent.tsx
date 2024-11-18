import { Button } from "antd"
import { useEffect, useRef, useState } from "react"

import useCount from "@/hooks/counter/useCount"

const SimpleModalContent = () => {
  const { count, increment, decrement } = useCount()
  const [dimension, setDimension] = useState({ width: 1200, height: 600 })
  const containerRef = useRef<HTMLDivElement>(null)
  console.log("SimpleModalContent-render-count=", count)
  useEffect(() => {
    if (containerRef.current) {
      // const {width,height} = containerRef.current.getBoundingClientRect()
      const wrapper = containerRef.current?.parentElement
      setDimension({
        width: wrapper?.offsetWidth || dimension.width,
        height: wrapper?.offsetHeight || dimension.height,
      })
    }
  }, [])

  return (
    <div ref={containerRef}>
      <h1>SimpleModalContent</h1>
      <div>
        height:{dimension.height};width:{dimension.width}
      </div>
      <p>
        <Button type="primary" onClick={increment}>
          +1
        </Button>
        <span>count:{count}</span>
        <Button type="default" onClick={decrement}>
          -1
        </Button>
      </p>
    </div>
  )
}
export default SimpleModalContent
