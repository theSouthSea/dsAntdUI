import { ChangeEvent, useState } from "react"

import Child from "./Child"

const Controlled = () => {
  const [value, setValue] = useState("")
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <>
      <div>Controlled</div>
      <Child value={value} onChange={handleChange}></Child>
    </>
  )
}
export default Controlled
