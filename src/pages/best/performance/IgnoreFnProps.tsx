import "./IgnoreFnProps.css"

import { useCallback, useEffect, useState } from "react"

import MemoComp from "./components/MemoComp"
import NormalComp from "./components/NormalComp"
import SkipNotRenderPropsComp, { SkipNonRenderProps } from "./components/SkipNotRenderPropsComp"

export default function App() {
  const [value, setValue] = useState(0)
  useEffect(() => {
    setValue(1000)
  }, [])

  const handleClick = useCallback(() => {
    window.alert(`当前回调值为: ${value}`)
  }, [value])

  return (
    <div className="App">
      <h1>跳过『与渲染无关的 Props』改变触发的重新渲染</h1>
      <div style={{ marginBottom: 20 }}>父组件中状态为：{value}</div>
      <NormalComp onClick={handleClick} />
      <MemoComp onClick={handleClick} />
      <SkipNonRenderProps>
        <SkipNotRenderPropsComp onClick={handleClick} />
      </SkipNonRenderProps>
    </div>
  )
}
