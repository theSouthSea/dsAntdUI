import React, { useEffect, useState } from "react"

const Component = () => {
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    if (counter === 2) {
      throw new Error("boo")
    }
  }, [counter])

  const onClick = () => {
    setCounter(counter + 1)
  }
  return <button onClick={onClick}>click me trigger error</button>
}

export default function App() {
  try {
    return (
      <div className="App">
        <h1>Try/catch and children example</h1>
        <p>click on a button to trigger state update and as a result - error</p>
        <p>
          <b>Ignore</b> and close error overlay - it's just in dev mode and can't be removed
        </p>
        <Component />
      </div>
    )
  } catch (e) {
    console.log("never triggered")
    return "error is never caught"
  }
}
