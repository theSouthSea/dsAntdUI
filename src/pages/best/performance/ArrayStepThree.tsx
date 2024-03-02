import React, { useEffect, useState } from "react"
// import "./styles.css";
/* 列表随机的key只会mount一次,重渲染相应的次数 */
const Child = ({ value }: { value: number }) => {
  console.log("Child re-renders", value)

  useEffect(() => {
    console.log("Child re-mounts")
  }, [])
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
      {values.map((val) => (
        <ChildMemo value={val} key={Math.random()} />
      ))}
    </>
  )
}

export default App
