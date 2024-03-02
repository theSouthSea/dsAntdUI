import "./styles.css"

import { ReactNode, useState } from "react"

const VerySlowComponent = () => {
  console.log("Very slow component re-renders")
  return <div>Very slow component</div>
}

const FullComponent = () => {
  const [state, setState] = useState(1)

  const onClick = () => {
    setState(state + 1)
  }

  return (
    <div onClick={onClick} className="click-block">
      <h3>component with everything</h3>
      <p>Click this component - "slow" component will re-render</p>
      <p>Re-render count: {state}</p>
      <VerySlowComponent />
    </div>
  )
}

const ComponentWithClick = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(1)

  const onClick = () => {
    setState(state + 1)
  }

  return (
    <div onClick={onClick} className="click-block">
      <p>Re-render count: {state}</p>
      {children}
    </div>
  )
}

const SplitComponent = () => {
  return (
    <>
      <ComponentWithClick>
        <>
          <h3>component with slow component passed as children</h3>
          <p>Click the block - "slow" component will NOT re-render</p>

          <VerySlowComponent />
        </>
      </ComponentWithClick>
    </>
  )
}

const App = () => {
  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Re-render should be logged on every click</p>

      <FullComponent />
      <hr />
      <hr />
      <SplitComponent />
    </>
  )
}

export default App
