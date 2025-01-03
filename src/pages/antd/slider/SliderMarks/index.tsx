import type { SliderSingleProps } from "antd"
import { Slider } from "antd"
import React from "react"

const marks: SliderSingleProps["marks"] = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100°C</strong>,
  },
}

const App: React.FC = () => {
  const handleChange = (value: number) => {
    console.log("onChange:", value)
  }
  return (
    <>
      <h4>included=true</h4>
      <Slider marks={marks} defaultValue={37} />
      <Slider range marks={marks} defaultValue={[26, 37]} />

      <h4>included=false</h4>
      <Slider marks={marks} included={false} defaultValue={37} />

      <h4>marks & step</h4>
      <Slider marks={marks} step={10} defaultValue={37} />

      <h4>step=null</h4>
      <Slider marks={marks} step={null} defaultValue={37} onChange={handleChange} />
    </>
  )
}

export default App
