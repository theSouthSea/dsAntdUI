import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

export default function App() {
  const [text, setText] = useState("Hello")
  const [debouncedValue] = useDebounce(text, 300)
  const [result, setResult] = useState([])
  useEffect(() => {
    // 根据 debouncedValue 进行搜索
    const getData = async () => {
      const res = await fetch(`https://api.github.com/search/users?q=${debouncedValue}`)
      const data = await res.json()
      console.log("data", data)
      setResult(data.items)
    }
    getData()
  }, [debouncedValue])

  return (
    <div>
      <input
        defaultValue={"Hello"}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <p>Actual value: {text}</p>
      <p>Debounce value: {debouncedValue}</p>
      <p>result: </p>
      <ul>
        {result.map((item) => (
          <li key={item.id}>{item.login}</li>
        ))}
      </ul>
    </div>
  )
}
