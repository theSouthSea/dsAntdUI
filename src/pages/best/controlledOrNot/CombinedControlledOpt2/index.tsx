import { useState } from "react"

import Child from "./Child"

let count = 0
const CombineControlledOpt1 = () => {
  const [value, setValue] = useState<string>("controlled")
  const handleChange = (value: string) => {
    console.log(value)
    setValue(value)
  }
  console.log("controlled-render", ++count)
  return (
    <>
      <div>CombineControlledOpt1</div>
      <Child value={value} onChange={handleChange}></Child>
    </>
  )
}
export default CombineControlledOpt1
