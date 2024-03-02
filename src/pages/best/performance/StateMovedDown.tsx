import { useState } from "react"
/* 状态下移解决组件重渲染的问题 */
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
    <>
      <h3>component with everything</h3>
      <p>Click this button - "slow" component will re-render</p>
      <p>Re-render count: {state}</p>
      <button onClick={onClick}>click here</button>
      <VerySlowComponent />
    </>
  )
}

const ComponentWithButton = () => {
  const [state, setState] = useState(1)

  const onClick = () => {
    setState(state + 1)
  }

  return (
    <>
      <p>Re-render count: {state}</p>
      <button onClick={onClick}>click here</button>
    </>
  )
}

const SplitComponent = () => {
  return (
    <>
      <h3>component with state moved down</h3>
      <p>Click this button - "slow" component will NOT re-render</p>
      <ComponentWithButton />
      <VerySlowComponent />
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
