import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import './styles.css'

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
      throw new Error('break things')
    } catch (e) {
      throwAsyncError(e)
    }
  }

  return <button onClick={onClick}>click me to cause an error</button>
}

const ComponentWithErrorHandler = () => {
  const onClick = () => {
    throw new Error('break things')
  }

  const onClickWithErrorHandler = useCallbackWithErrorHandling(onClick)

  return <button onClick={onClickWithErrorHandler}>click me to cause an error</button>
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
