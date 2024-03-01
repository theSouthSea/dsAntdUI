import React, { ReactElement, ReactNode, useState } from "react"

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

const Component = () => {
  const [state, setState] = useState()

  const onClick = () => {
    try {
      throw new Error("break things")
    } catch (e) {
      console.log("here!")
      setState(() => {
        throw e
      })
    }
  }

  return <button onClick={onClick}>click me to cause an error</button>
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
        <Component />
      </ErrorBoundary>
    </div>
  )
}
