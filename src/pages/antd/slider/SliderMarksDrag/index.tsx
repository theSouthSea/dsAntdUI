import Section from "@business/Section"
import { Slider, SliderSingleProps } from "antd"
import { useState } from "react"

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
const difficultyMarks: SliderSingleProps["marks"] = {
  0: "简单",
  50: "中等",
  100: "困难",
}
const difficultyMarksReverse = {
  困难: 100,
  中等: 50,
  简单: 0,
} as const
// 获取对象的键值字面量类型
type DifficultyType = typeof difficultyMarksReverse
type DifficultyKey = keyof DifficultyType
type DifficultyValue = DifficultyType[DifficultyKey]
const SliderMarksDrag = () => {
  const [difficulty, setDifficulty] = useState(50)
  const handleSliderChange = (value: number) => {
    setDifficulty(value)
  }
  const [difficultyName, setDifficultyName] = useState("中等")
  console.log("render-difficultyName=", difficultyName, difficultyMarksReverse[difficultyName])
  const handleSliderNameChange = (value: number) => {
    console.log("handleSliderNameChange-value=", value)
    const name = difficultyMarks[String(value as DifficultyValue)] as string
    console.log("handleSliderNameChange-name=", name, typeof name)
    setDifficultyName(name)
  }
  return (
    <>
      <div>SliderMarksDrag</div>
      <Section title="marks的使用">
        <Slider marks={marks} step={null} defaultValue={37} />
      </Section>
      <Section title="marks+困难标记">
        <Slider marks={difficultyMarks} step={null} defaultValue={50} />
      </Section>
      <Section title="marks+困难标记+onChange" style={{ display: "none" }}>
        <Slider
          marks={difficultyMarks}
          step={null}
          value={difficulty}
          onChange={handleSliderChange}
        />
      </Section>
      <Section title="marks+困难标记+onChange">
        <Slider
          marks={difficultyMarks}
          step={null}
          value={difficulty}
          onChange={handleSliderChange}
        />
      </Section>
      <Section title="marks+困难标记+">
        <Slider
          marks={difficultyMarks}
          step={null}
          value={difficultyMarksReverse[difficultyName]}
          onChange={handleSliderNameChange}
        />
      </Section>
    </>
  )
}
export default SliderMarksDrag
