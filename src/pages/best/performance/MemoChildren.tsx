import "./styles.css"

import React, { ReactNode, useMemo, useState } from "react"
/* memo子组件时，父组件更新，子组件不更新 */
const Child = ({ value }: { value: { value: string } }) => {
  console.log("Child re-renders", value.value)
  return <>{value.value}</>
}

const ChildMemo = React.memo(Child)

const Parent = ({ left, children }: { children: ReactNode; left: ReactNode }) => {
  return (
    <div>
      {left}
      {children}
    </div>
  )
}

const ParentMemo = React.memo(Parent)

const App = () => {
  const [state, setState] = useState(1)

  const onClick = () => {
    setState(state + 1)
  }

  const memoValue = useMemo(() => ({ value: "memoized" }), [])

  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Children of memoized Parent should re-render</p>
      <p>Memoized children of not memoized parent should not</p>

      <button onClick={onClick}>click here</button>

      <ParentMemo left={<Child value={{ value: "left child of ParentMemo" }} />}>
        <Child value={{ value: "child of ParentMemo" }} />
      </ParentMemo>

      <Parent left={<ChildMemo value={memoValue} />}>
        <ChildMemo value={memoValue} />
      </Parent>
    </>
  )
}

export default App
