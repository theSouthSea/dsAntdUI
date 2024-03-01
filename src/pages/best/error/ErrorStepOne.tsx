import React, { useEffect, useState } from "react"

const Component = () => {
  const [counter, setCounter] = useState(1)

  try {
    useEffect(() => {
      if (counter === 2) {
        throw new Error("boo")
      }
    }, [counter])
  } catch (e) {
    console.log("never called!")
  }

  const onClick = () => {
    setCounter(counter + 1)
  }
  return <button onClick={onClick}>click me to trigger uncaught error</button>
}

const Component2 = () => {
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    try {
      if (counter === 2) {
        throw new Error("boo")
      }
    } catch (e) {
      console.log("Error is caught!")
    }
  }, [counter])

  const onClick = () => {
    setCounter(counter + 1)
  }
  return <button onClick={onClick}>click me trigger caught error</button>
}

export default function App() {
  return (
    <div className="App">
      <h1>Try/catch and useEffect examples</h1>
      <p>click on a button to trigger state update and as a result - error</p>
      <p>
        <b>Ignore</b> and close error overlay - it's just in dev mode and can't be removed
      </p>
      <Component />
      <Component2 />
    </div>
  )
}
