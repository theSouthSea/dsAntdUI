import React, { useCallback, useState } from "react"
import { useDebouncedCallback } from "use-debounce"

function InputWithCallback({ defaultValue }) {
  const [value, setValue] = useState(defaultValue)
  const debounced = useDebouncedCallback(
    // to memoize debouncedFunction we use useCallback hook.
    // In this case all linters work correctly
    useCallback((value) => {
      setValue(value)
    }, []),
    700,
    // The maximum time func is allowed to be delayed before it's invoked:
    { maxWait: 2000 },
  )

  // you should use `e => debouncedFunction(e.target.value)` as react works with synthetic evens
  return (
    <div>
      <h2>useDebouncedCallback</h2>
      <input defaultValue={defaultValue} onChange={(e) => debounced(e.target.value)} />
      <p>Debounced value: {value}</p>
      <button onClick={debounced.cancel}>Cancel Debounce cycle</button>
    </div>
  )
}

export default InputWithCallback
