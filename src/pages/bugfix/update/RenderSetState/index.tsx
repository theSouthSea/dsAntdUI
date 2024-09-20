import { useState } from "react"

let outerCount = 1
export default function App() {
  const [count, setCount] = useState(0)
  console.log("App-outerCount-count", outerCount++, count)
  if (count !== 1) {
    setCount(1)
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox {count}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  )
}
