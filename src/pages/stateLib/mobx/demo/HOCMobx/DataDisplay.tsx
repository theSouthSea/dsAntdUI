import { Input } from "antd"
import { debounce } from "lodash-es"
import { memo, useCallback, useEffect, useRef, useState } from "react"

import withData from "./withData"

const DataDisplay = ({ data, value: propValue, onChange }) => {
  const [value, setValue] = useState(propValue)
  // const debounceChangeRef = useRef(debounce(onChange, 500))
  const debounceCallback = useCallback(debounce(onChange, 500), [])
  useEffect(() => {
    setValue(propValue)
  }, [propValue])
  const handleChange = useCallback((e) => {
    setValue(e.target.value)
    // debounceChangeRef.current(e)
    debounceCallback(e)
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Data Display</h1>
      <Input value={value} onChange={handleChange}></Input>
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
