import React, { useMemo, useState } from "react"
// import "./styles.css";
/* 静态列表 */
const Child = ({ value }: { value: number }) => {
  console.log("Child re-renders", value)
  return <div>{value}</div>
}

const values = [1, 2, 3]

const ChildMemo = React.memo(Child)

const App = () => {
  const [state, setState] = useState(1)

  const onClick = () => {
    setState(state + 1)
  }

  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Static lists with index and id as key</p>
      <p>both lists are fine</p>
      <p>Children should not re-render</p>

      <button onClick={onClick}>click here {state}</button>
      <br />
      <br />
      {values.map((val, index) => (
        <ChildMemo value={val} key={index} />
      ))}
      <br />
      <br />
      {values.map((val) => (
        <ChildMemo value={val} key={val} />
      ))}
    </>
  )
}

export default App
