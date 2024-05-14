import { useEffect, useState } from "react"
import VisibilityObserver, { useVisibilityObserver } from "react-visibility-observer"

const VisibilityObserverChildren = ({ callback, children }) => {
  const { isVisible } = useVisibilityObserver()
  useEffect(() => {
    callback(isVisible)
  }, [callback, isVisible])

  return <>{children}</>
}

export const LazyRender = () => {
  const [isRendered, setIsRendered] = useState(false)

  if (!isRendered) {
    return (
      <div className="box-scroll h-[100vh] w-[100%] overflow-auto">
        <div className="h-[120vh] bg-red-500"></div>
        <VisibilityObserver rootMargin={"20px 0px 50px 0px"}>
          <VisibilityObserverChildren
            callback={(isVisible) => {
              if (isVisible) {
                setIsRendered(true)
              }
            }}
          >
            <div className="h-[100px] bg-green-700"></div>
          </VisibilityObserverChildren>
        </VisibilityObserver>
      </div>
    )
  }

  console.log("滚动到可视区域才渲染")
  return <div>我是 LazyRender 组件</div>
}

export default LazyRender
