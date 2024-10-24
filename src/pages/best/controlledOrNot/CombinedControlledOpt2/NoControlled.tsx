import { useState } from "react"

import Child from "./Child"

let count = 0
const CombineControlledOpt1 = () => {
  const handleChange = (value: string) => {
    console.log("noControlled=", value)
  }
  console.log("noControlled-render", ++count)
  return (
    <>
      <div>CombineControlledOpt1</div>
      <Child defaultValue="noControlled" onChange={handleChange}></Child>
    </>
  )
}
export default CombineControlledOpt1
