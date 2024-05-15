import { useState } from "react"

const renderCountObj: { [key: string]: number } = {}
const getRenderCount = (name: string) => {
  return renderCountObj[name] ? renderCountObj[name]++ : (renderCountObj[name] = 1)
}
export default function App() {
  const [color, setColor] = useState("red")
  return (
    <div>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTree />
      <p>render count: {getRenderCount("App")}</p>
    </div>
  )
}

function ExpensiveTree() {
  const now = performance.now()
  while (performance.now() - now < 100) {
    // Artificial delay -- do nothing for 100ms
  }
  return (
    <>
      <p>I am a very slow component tree.</p>
      <p>render count: {getRenderCount("ExpensiveTree")}</p>
    </>
  )
}
