import React, { useCallback, useState } from "react"

export default function App() {
  const [value, setValue] = useState<string>("")

  const onClick = useCallback(() => {
    // state will always be the initial state value here
    // the closure is never refreshed
    console.log(value)

    // forgot about dependencies
  }, [])

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
