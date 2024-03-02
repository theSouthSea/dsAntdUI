import { useEffect, useRef, useState } from "react"

export const Sidebar = () => {
  const [width, setWidth] = useState(240)
  const [startMoving, setStartMoving] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const changeWidth = (e: MouseEvent) => {
      if (!startMoving) return
      if (!ref.current) return

      const left = ref.current.getBoundingClientRect().left
      const wi = e.clientX - left

      setWidth(wi)
    }

    ref.current.addEventListener("mousemove", changeWidth)

    return () => ref.current?.removeEventListener("mousemove", changeWidth)
  }, [startMoving, ref])

  const onStartMoving = () => {
    setStartMoving(true)
  }

  const onEndMoving = () => {
    setStartMoving(false)
  }

  return (
    <div className="sidebar" ref={ref} onMouseLeave={onEndMoving} style={{ width: `${width}px` }}>
      <Handle onMouseDown={onStartMoving} onMouseUp={onEndMoving} />
      ... the rest of the code
    </div>
  )
}
