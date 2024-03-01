/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { EmotionJSX } from "node_modules/@emotion/react/types/jsx-namespace"
// import type { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import { ReactNode, useState } from "react"

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
const MovingComponent = ({ children }: { children: (data: any) => EmotionJSX.Element }) => {
  const [state, setState] = useState({ x: 100, y: 100 })

  return (
    <div
      // when the mouse moves inside this component, update the state
      onMouseMove={(e) => setState({ x: e.clientX - 20, y: e.clientY - 20 })}
      // use this state right away - the component will follow mouse movements
      style={{ left: state.x, top: state.y }}
      css={boxCss}
    >
      {children({ data: "something" })}
    </div>
  )
}
export default function App() {
  return <MovingComponent>{(data: any) => <ChildComponent></ChildComponent>}</MovingComponent>
}
