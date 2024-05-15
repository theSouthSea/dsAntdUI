import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import subscribe from "subscribe-event"
import { useDebouncedCallback } from "use-debounce"

export default function ScrolledComponent() {
  // just a counter to show, that there are no any unnessesary updates
  const updatedCount = useRef(0)
  updatedCount.current++

  const [position, setPosition] = useState(window.pageYOffset)

  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    () => {
      setPosition(window.pageYOffset)
    },
    // delay in ms
    800,
  )

  useEffect(() => {
    const unsubscribe = subscribe(window, "scroll", debounced)
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div style={{ height: 10000 }}>
      <div style={{ position: "fixed", top: 0, left: 0 }}>
        <p>Debounced top position: {position}</p>
        <p>Component rerendered {updatedCount.current} times</p>
      </div>
    </div>
  )
}
