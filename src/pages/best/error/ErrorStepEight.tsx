import React, { ReactElement, ReactNode, useEffect, useState } from "react"

import ErrorBoundary from "./ErrorBoundary"

const useThrowAsyncError = () => {
  const [state, setState] = useState()

  return (error: any) => {
    setState(() => {
      throw error
    })
  }
}

const useCallbackWithErrorHandling = (callback: (args: any[]) => void) => {
  const [state, setState] = useState()

  return (...args: any[]) => {
    try {
      callback(args)
    } catch (e) {
      setState(() => {
        throw e
      })
    }
  }
}
const useCallbackWithAsyncErrorHandling = (callback: (args: any[]) => void) => {
  const [state, setState] = useState()

  return async (...args: any[]) => {
    try {
      await callback(args)
    } catch (e) {
      setState(() => {
        throw e
      })
    }
  }
}

const ComponentWithAsyncThrower = () => {
  const throwAsyncError = useThrowAsyncError()

  const onClick = () => {
    try {
      throw new Error("break things")
    } catch (e) {
      throwAsyncError(e)
    }
  }

  return <button onClick={onClick}>click me to cause an error</button>
}

const ComponentWithErrorHandler = () => {
  const onClick = () => {
    throw new Error("break things")
  }
  const onAsyncClick = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("异步操作失败")
      }, 1000)
    })
  }
  const onAsyncError = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("异步操作失败")
      }, 1000)
    })
  }

  const onClickWithErrorHandler = useCallbackWithErrorHandling(onClick)
  const onClickWithAsyncErrorHandler = useCallbackWithErrorHandling(onAsyncClick)
  const onAsyncErrorHandler = useCallbackWithAsyncErrorHandling(onAsyncError)

  return (
    <>
      <button onClick={onClickWithErrorHandler}>捕获事件处理程序中的错误</button>
      <button onClick={onClickWithAsyncErrorHandler}>捕获事件处理程序中的异步错误</button>
      <button onClick={onAsyncErrorHandler}>捕获异步操作中的错误</button>
    </>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>ErrorBoundary with async errors</h1>
      <p>click on a button to trigger state update and as a result - error</p>
      <p>
        <b>Ignore</b> and close error overlay - it's just in dev mode and can't be removed
      </p>
      <ErrorBoundary fallback={<>Something happened!</>}>
        <ComponentWithAsyncThrower />
        <ComponentWithErrorHandler />
      </ErrorBoundary>
    </div>
  )
}
