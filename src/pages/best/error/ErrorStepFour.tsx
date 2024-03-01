// 错误边界的局限性
// 不能捕获异步中的错误
// 不能捕获事件中的错误
//
import { useEffect, useState } from "react"

import ErrorBoundary from "./ErrorBoundary"

const EffectThrowError = () => {
  useEffect(() => {
    throw new Error("Hulk smash!")
  }, [])
  return <div>EffectThrowError</div>
}
const FetchError = () => {
  useEffect(() => {
    // if this one fails, the error will also disappear
    // fetch("/bla")
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("网络错误")
      }, 1000)
    })
  }, [])
  return <div>FetchError</div>
}
// 不能捕获事件中的错误
const Component = () => {
  const [openErrorChild, setOpenErrorChild] = useState(false)
  const [openFetchErrorChild, setOpenFetchErrorChild] = useState(false)

  const onClick = () => {
    // this error will just disappear into the void
    throw new Error("Hulk smash!")
  }
  const handleOpenErrorChild = () => {
    setOpenErrorChild(true)
  }
  const handleFetchErrorChild = () => {
    setOpenFetchErrorChild(true)
  }

  return (
    <>
      <button onClick={onClick}>Click me!</button>
      <button onClick={handleOpenErrorChild}>显示useEffect错误的子组件</button>
      <button onClick={handleFetchErrorChild}>显示获取数据错误的子组件</button>
      {openErrorChild && <EffectThrowError></EffectThrowError>}
      {openFetchErrorChild && <FetchError></FetchError>}
    </>
  )
}

const ComponentWithBoundary = () => {
  return (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  )
}
export default ComponentWithBoundary
