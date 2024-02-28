import React, { useEffect, useRef, useState } from "react"

export default function App() {
  const [value, setValue] = useState<string>()

  const refStale = useRef(() => {
    // value is stale and never changes
    console.log("stale", value)
  })
  const ref = useRef(() => {
    console.log(value)
  })

  useEffect(() => {
    // update the closure when state or props change
    ref.current = () => {
      console.log("latest", value)
    }
  }, [value])

  const onClick = () => {
    // stale closure, logs undefined
    refStale.current()
    // updated closure, logs latest
    ref.current()
  }

  return (
    <div className="App">
      <h1>Closures example</h1>

      <>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="button" onClick={onClick}>
          click
        </button>
      </>
    </div>
  )
}
