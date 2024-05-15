import React, { useEffect, useState } from "react"
import { useDebouncedCallback } from "use-debounce"

function InputWhichFetchesSomeData({ defaultValue, asyncFetchData }) {
  const debounced = useDebouncedCallback(
    (value) => {
      console.log("value", value)
      asyncFetchData(value)
    },
    500,
    { maxWait: 2000 },
  )

  // When the component goes to be unmounted, we will fetch data if the input has changed.
  useEffect(
    () => () => {
      console.log("unmount")
      debounced.flush()
    },
    [debounced],
  )

  return <input defaultValue={defaultValue} onChange={(e) => debounced(e.target.value)} />
}
const UseDebounceUnmount = () => {
  const [visible, setVisible] = useState()
  const [result, setResult] = useState([])
  const getData = async (value = "hello") => {
    const res = await fetch(`https://api.github.com/search/users?q=${value}`)
    const data = await res.json()
    console.log("data", data)
    setResult(data.items)
  }
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>{visible ? "隐藏" : "显示"}</button>
      {visible && <InputWhichFetchesSomeData defaultValue="Hello" asyncFetchData={getData} />}
      <ul>
        {result.map((item) => (
          <li key={item.id}>{item.login}</li>
        ))}
      </ul>
    </div>
  )
}
export default UseDebounceUnmount
