import { Slider } from "antd"

// type IDifficulty = "easy" | "medium" | "hard"
export type IDifficulty = keyof typeof IDifficultyEnum
enum IDifficultyEnum {
  easy = "简单",
  medium = "一般",
  hard = "困难",
}
const marks = {
  0: IDifficultyEnum["easy"],
  50: IDifficultyEnum["medium"],
  100: IDifficultyEnum["hard"],
}
const reverseMarks = ((marks) => {
  const result = {}
  Object.entries(marks).forEach(([key, value]) => {
    result[value] = key
  })
  return result
})(marks)
interface QuestionDifficultyProps {
  value: IDifficulty
  onChange: (value: IDifficulty) => void
}
const QuestionDifficulty = (props: QuestionDifficultyProps) => {
  const { value, onChange } = props
  return (
    <div className="flex items-center justify-end gap-5">
      <span className="text-gray-500">难度</span>
      <Slider
        className="w-[200px]"
        value={reverseMarks[value]}
        marks={marks}
        step={null}
        onChange={(value) => onChange(marks[value])}
      ></Slider>
      {/* <div className="flex gap-2">
        <button
          className={`px-2 py-1 rounded-md ${value === IDifficulty.easy? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => onChange(IDifficulty.easy)}
        >
          {IDifficulty.easy}
        </button>
        <button
          className={`px-2 py-1 rounded-md ${value === IDifficulty.medium? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => onChange(IDifficulty.medium)}
        >
          {IDifficulty.medium}
        </button>
        <button
          className={`px-2 py-1 rounded-md ${value === IDifficulty.hard? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => onChange(IDifficulty.hard)}
        >
          {IDifficulty.hard}
        </button>
      </div> */}
    </div>
  )
}
export default QuestionDifficulty
