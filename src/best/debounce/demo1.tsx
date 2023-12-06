import './styles.scss'
import { ChangeEventHandler, useState, useMemo, useCallback } from 'react'
import debounce from 'lodash/debounce'

const sendBackendRequest = (value: string) => {
  console.log('Changed value:', value)
}

const debouncedSendRequest = debounce(sendBackendRequest, 1000)

const DebounceOutside = () => {
  const [value, setValue] = useState('initial')

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    setValue(value)
    debouncedSendRequest(value)
  }

  return <input onChange={onChange} value={value} />
}

const DebounceWithUseMemo = () => {
  const [value, setValue] = useState('initial')

  const sendBackendRequest = useCallback((value: string) => {
    console.log('Changed value:', value)
  }, [])

  const debouncedSendRequest = useMemo(() => {
    return debounce(sendBackendRequest, 1000)
  }, [sendBackendRequest])

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    setValue(value)
    debouncedSendRequest(value)
  }

  return <input onChange={onChange} value={value} />
}

export default function App() {
  return (
    <div className="App">
      <h1>Controlled components with fixed debouncing</h1>
      <h3>Open console and type something in inputs</h3>
      <div className="container">
        <div className="column">
          <h3>Debounced outside</h3>
          <DebounceOutside />
          Just works!
        </div>
        <div className="column">
          <h3>Debounced with useMemo</h3>
          <DebounceWithUseMemo />
          Equally works
        </div>
      </div>
    </div>
  )
}
