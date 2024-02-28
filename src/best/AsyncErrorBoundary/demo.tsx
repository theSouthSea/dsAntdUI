import React, { ReactElement, ReactNode, useEffect, useState } from "react"

type Props = { children: ReactNode; fallback: ReactElement }
type State = { hasError: boolean }

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // initialize the error state
    this.state = { hasError: false }
  }

  // if an error happened, set the state to true
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    // send error to somewhere here
    console.log(error, errorInfo)
  }

  render() {
    // if error happened, return a fallback component
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

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
const fakeRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("网络错误")
      throw new Error("网络错误")
    }, 500)
  })
}
const ComponentWithErrorHandler = () => {
  const onClick = () => {
    throw new Error("break things")
  }
  const onAsyncClick = async () => {
    await fakeRequest()
  }
  // const onAsyncClick = () => {
  //   fakeRequest()
  // }
  const onClickWithErrorHandler = useCallbackWithErrorHandling(onClick)
  const onClickWithAsyncErrorHandler = useCallbackWithErrorHandling(onAsyncClick)

  return (
    <div>
      <button onClick={onClickWithErrorHandler}>click me to cause an error</button>
      <button onClick={onClickWithAsyncErrorHandler}>click me to cause an async error</button>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>ErrorBoundary with async errors</h1>
      <p>click on a button to trigger state update and as a result - error</p>
      <p>
        <b>Ignore</b> and close error overlay - it&apos;s just in dev mode and can&apos;t be removed
      </p>
      <ErrorBoundary fallback={<>Something happened!</>}>
        <ComponentWithAsyncThrower />
        <ComponentWithErrorHandler />
      </ErrorBoundary>
    </div>
  )
}
