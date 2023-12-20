import { useCallback, useEffect, useState } from "react"

// 获取鼠标位置（自定义hooks）
function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    setX(event.clientX)
    setY(event.clientY)
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler)
    return () => {
      // 组件销毁时一定要解绑dom 事件，可能会出现内存泄露问题
      window.removeEventListener("mousemove", mouseMoveHandler)
    }
  })
  return { x, y }
}

// useEffect  会返回一个函数，这个返回函数代表的是组件销毁 可以做一些解绑操作
export default useMouse
