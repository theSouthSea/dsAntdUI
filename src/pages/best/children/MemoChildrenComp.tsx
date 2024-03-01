import "./styles.css"

import React, { ReactNode, useState } from "react"

const ChildComponent = ({ source }: { source: string }) => {
  console.info("ChildComponent re-render from source: ", source)
  return <div className="child">Child from {source}</div>
}

const MovingComponent = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({ x: 100, y: 100 })

  return (
    <div
      className="moving-div"
      onMouseMove={(e) => setState({ x: e.clientX - 20, y: e.clientY - 20 })}
      style={{ left: state.x, top: state.y }}
    >
      {children}
    </div>
  )
}

const MovingComponentMemo = React.memo(MovingComponent)
const ChildComponentMemo = React.memo(ChildComponent)

export default function App() {
  const [state, setState] = useState(1)
  return (
    <div className="container">
      <button onClick={() => setState(state + 1)}>re-render parent on click {state}</button>
      <div className="column">
        <MovingComponent>
          <ChildComponent source="not memoised" />
        </MovingComponent>
      </div>
      <div className="column">
        <MovingComponentMemo>
          <ChildComponent source="parent memoised" />
        </MovingComponentMemo>
      </div>
      <div className="column">
        <MovingComponent>
          <ChildComponentMemo source="child memoised" />
        </MovingComponent>
      </div>
    </div>
  )
}
