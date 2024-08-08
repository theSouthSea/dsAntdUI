import { lazy, useCallback, useState } from "react"

import { FieldType } from "./components/AA"

const AA = lazy(() => import("./components/AA"))
const AAA = lazy(() => import("./components/AAA"))
const compMap = {
  AA: AA,
  AAA: AAA,
}
export interface ArrayItemProps {
  id: number
  type: string
  name: string
  age: number
  onSubmit: (values: FieldType, id: number) => void
}
const ArrayState = () => {
  const [array, setArray] = useState([
    { id: 1, type: "AA", name: "John", age: 30 },
    { id: 2, type: "AAA", name: "Jane", age: 20 },
    // {id: 3,type:"AAAA", name: "Mary"},
    // {id: 4,type:"AAAAA", name: "Bob"},
    // {id: 5,type:"A", name: "Alice"},
  ])
  const handleSubmit = useCallback((values: FieldType, id: number) => {
    console.log("ArrayState-values", values)
    // const currentItem = array.find((i) => i.id === Number(id))
    // if (currentItem) {
    //   setArray(array.map((i) => (i.id === currentItem.id ? { ...i, ...values } : i)))
    // }
    setArray((array) => array.map((i) => (i.id === id ? { ...i, ...values } : i)))
  }, [])
  return (
    <div>
      <h2>ArrayState</h2>
      <button
        onClick={() =>
          setArray([...array, { id: array.length + 1, type: "AA", name: "New", age: 18 }])
        }
      >
        Add
      </button>
      <ul>
        {array.map((item) => {
          const Comp = compMap[item.type as keyof typeof compMap]
          return (
            <li key={item.id}>
              <button onClick={() => setArray(array.filter((i) => i.id !== item.id))}>
                Delete
              </button>
              <button
                onClick={() =>
                  setArray(array.map((i) => (i.id === item.id ? { ...i, name: "New" } : i)))
                }
              >
                Edit
              </button>
              <div>{item.name}</div>
              <div>{item.type}</div>
              <Comp {...item} onSubmit={handleSubmit}></Comp>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default ArrayState
