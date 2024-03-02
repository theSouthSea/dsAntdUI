import React, { useEffect, useMemo, useState } from "react"
/* 动态列表 */
const Child = ({ value }: { value: string }) => {
  console.log("Child re-renders", value)
  useEffect(() => {
    return () => {
      console.log("Child unmounts", value)
    }
  }, [])
  return <div>{value}</div>
}

const values = [3, 1, 2]

const ChildMemo = React.memo(Child)

const App = () => {
  const [state, setState] = useState<"up" | "down">("up")

  const onClick = () => {
    setState(state === "up" ? "down" : "up")
  }

  const sortedValues = state === "up" ? values.sort() : values.sort().reverse()
  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Dynamic lists with index and id as key</p>
      <p>Index as key doesn't work - children re-render. Id as key is fine</p>
      <p>Children should not re-render</p>

      <button onClick={onClick}>click here {state}</button>
      <br />
      <br />
      {sortedValues.map((val, index) => (
        <ChildMemo value={`Child of index: ${val}`} key={index} />
      ))}
      <br />
      <br />
      {sortedValues.map((val) => (
        <ChildMemo value={`Child of id: ${val}`} key={val} />
      ))}
    </>
  )
}

export default App
