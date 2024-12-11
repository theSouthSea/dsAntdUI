import { Input } from "antd"
import { debounce } from "lodash-es"
import { memo, useCallback, useEffect, useRef, useState } from "react"

import withData from "./withData"

const DataDisplay = ({ data, onChange }) => {
  const [value, setValue] = useState("")
  const valueRef = useRef(value)
  // const debounceChangeRef = useRef(debounce(onChange, 500))
  // const debounceCallback = useCallback(debounce(onChange, 500), [onChange])
  const debounceCallback = useCallback(
    debounce(async () => {
      await onChange(valueRef.current)
      // setValue("test")
    }, 500),
    [onChange],
  )
  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value)
      valueRef.current = e.target.value
      // debounceChangeRef.current(e)
      // debounceCallback(e.target.value)
      if (isComposingRef.current) return
      debounceCallback()
    },
    [debounceCallback],
  )

  // if (!data) {
  //   return <div>Loading...</div>
  // }
  const isComposingRef = useRef(false)
  const handleCompsitionEnd = useCallback(
    (event) => {
      console.log("event.data,event.target.value=", event.data, event.target.value)
      isComposingRef.current = false
      debounceCallback()
      // 解决withData中allTodos为空数组的问题-console.log("handleChange-allTodos=", allTodos)
      // React闭包陷阱常见于useCallback,useMemo,useRef,useEffect依赖数组配置不正确的情况
      // 使用eslint相关插件检测,能有效避免这个问题
    },
    [debounceCallback],
  )
  // }, [])
  const handleCompositionStart = useCallback(() => {
    isComposingRef.current = true
  }, [])
  return (
    <div>
      <h1>Data Display</h1>
      <Input
        value={value}
        onChange={handleChange}
        onCompositionEnd={handleCompsitionEnd}
        onCompositionStart={handleCompositionStart}
      ></Input>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

const DataDisplayWithData = withData(DataDisplay)
export default DataDisplayWithData
// export default memo(DataDisplayWithData)
