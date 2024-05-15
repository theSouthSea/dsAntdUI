import React, { useCallback, useState } from "react"
import { useDebounce } from "use-debounce"

function InputWithCache({ defaultValue }) {
  const [text, setText] = useState(defaultValue)
  // maxWait is the maximum time func is allowed to be delayed before it's invoked:
  const [debouncedText, fn] = useDebounce(text, 700, { maxWait: 2000 })

  // you should use `e => debounced.callback(e.target.value)` as react works with synthetic evens
  return (
    <div>
      <h2>useDebounce</h2>
      <input
        defaultValue={defaultValue}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <p>Debounced value: {debouncedText}</p>
      <button onClick={fn.cancel}>Cancel Debounce cycle</button>
    </div>
  )
}

export default InputWithCache
