import "./styles.css"

import React, { useCallback, useEffect, useRef, useState } from "react"

const Child = () => {
  console.log("Child re-renders")
  return <div>child here</div>
}

const FunctionalParent = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("FunctionalParent useEffect")
  })

  console.log("FunctionalParent re-renders")
  return (
    <>
      <button onClick={() => setCounter(1)}>Click button {counter}</button>
      <Child />
    </>
  )
}

export default function App() {
  return (
    <>
      <h3>Functional component with a child</h3>
      <FunctionalParent />
    </>
  )
}
