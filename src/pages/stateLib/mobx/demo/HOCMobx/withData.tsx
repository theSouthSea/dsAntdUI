import { useEffect, useState } from "react"

import { getTodosBySearch } from "@/services/todos"

const withData = (WrappedComponent) => {
  const DataFetcher = (props) => {
    const { data: allTodos, ...rest } = props
    const [data, setData] = useState(null)
    const [value, setValue] = useState("")

    useEffect(() => {
      // 在这里进行数据获取操作，例如调用 API
      // fetch("https://api.example.com/data")
      //   .then((response) => response.json())
      //   .then((data) => setData(data))
      //   .catch((error) => console.error("Error fetching data:", error))
      getTodosBySearch({ search: value }).then((res) => {
        setData(res.data)
      })
    }, [value])
    const handleChange = (e) => {
      console.log("handleChange-allTodos=", allTodos)
      setValue(e.target.value)
    }

    return <WrappedComponent {...rest} data={data} value={value} onChange={handleChange} />
  }

  return DataFetcher
}

export default withData
