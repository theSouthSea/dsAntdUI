/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"

const boxCss = css`
  width: 600px;
  height: 400px;
  background-color: #f00;
  position: absolute;
`
const ChildComponent = () => {
  console.log("ChildComponent render")
  return <div>ChildComponent</div>
}
const MovingComponent = () => {
  const [state, setState] = useState({ x: 100, y: 100 })

  return (
    <div
      // when the mouse moves inside this component, update the state
      onMouseMove={(e) => setState({ x: e.clientX - 20, y: e.clientY - 20 })}
      // use this state right away - the component will follow mouse movements
      style={{ left: state.x, top: state.y }}
      css={boxCss}
    >
      <ChildComponent />
    </div>
  )
}
export default MovingComponent
