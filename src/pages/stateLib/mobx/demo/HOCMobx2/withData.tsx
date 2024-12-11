import { isObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { useCallback, useEffect, useState } from "react"

import { getTodosBySearch } from "@/services/todos"

const withData = (WrappedComponent) => {
  const DataFetcher = (props) => {
    const { data: allTodos, ...rest } = props
    const [data, setData] = useState([])
    const isReactive = isObservable(allTodos)
    // const isPropReactive = isObservableProp(allTodos, "length")
    console.log("DataFetcher-render-allTodos=", allTodos)
    console.log("isReactive", isReactive)
    // console.log("isPropReactive", isPropReactive)
    useEffect(() => {
      console.log("DataFetcher-allTodos-mount=", allTodos)
      return () => {
        console.log("DataFetcher-allTodos-unmount=", allTodos)
      }
    }, [allTodos])
    const handleChange = useCallback(
      async (value) => {
        console.log("handleChange-allTodos=", allTodos)
        const res = await getTodosBySearch({ search: value })
        setData(res.data)
      },
      [allTodos],
    )

    return (
      <>
        <WrappedComponent {...rest} data={data} onChange={handleChange} />
        {/* <div>{JSON.stringify(allTodos, null, 2)}</div> */}
      </>
    )
  }

  // return DataFetcher
  return observer(DataFetcher)
}

export default withData
