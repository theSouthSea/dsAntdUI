import { useEffect, useState } from "react"

import useCount from "@/hooks/counter/useCount"

const ComponentWillUnmount = () => {
  const { count, increment, decrement } = useCount()
  const [name, setName] = useState("")
  useEffect(() => {
    console.log("componentDidUpdate-count", count)
    return () => {
      console.log("ComponentWillUnmount-count", count)
    }
  })
  useEffect(() => {
    console.log("componentDidUpdate-name", name)
    return () => {
      console.log("ComponentWillUnmount-name", name)
    }
  }, [name])
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  return (
    <div>
      <h1>ComponentWillUnmount</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  )
}
export default ComponentWillUnmount
