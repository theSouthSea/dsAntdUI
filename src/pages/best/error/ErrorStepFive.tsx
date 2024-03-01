import { useState } from "react"

import ErrorBoundary from "./ErrorBoundary"

const Component = () => {
  const [hasError, setHasError] = useState(false)

  // most of the errors in this component and in children will be caught by the ErrorBoundary

  const handleCatchError = () => {
    try {
      // this error will be caught by catch
      throw new Error("Hulk smash!")
    } catch (e) {
      setHasError(true)
    }
  }
  const handleClick = () => {
    throw new Error("事件中的错误")
  }

  if (hasError) return "something went wrong"

  return (
    <>
      <button onClick={handleCatchError}>捕获点击事件中的错误</button>
      <button onClick={handleClick}>不捕获点击事件中的错误</button>
    </>
  )
}

const ComponentWithBoundary = () => {
  return (
    <ErrorBoundary fallback={<div>Oh no! Something went wrong</div>}>
      <Component />
    </ErrorBoundary>
  )
}
export default ComponentWithBoundary
