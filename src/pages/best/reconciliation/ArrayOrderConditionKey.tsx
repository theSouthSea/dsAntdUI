import "./styles.css"

import { useEffect, useState } from "react"

type InputProps = {
  onChange: () => void
  placeholder: string
  label: string
  id: string
}

const Input = ({ onChange, label, placeholder, id }: InputProps) => {
  useEffect(() => {
    console.log(`Input mounted`)
  }, [])

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" onChange={onChange} id={id} placeholder={placeholder} />
    </>
  )
}

const data = [1, 2]

export default function App() {
  const [order, setOrder] = useState(false)

  const inputs = order ? [...data].reverse() : data

  return (
    <div className="App">
      <h1>"key" attribute example</h1>

      <label>
        <input type="checkbox" onChange={() => setOrder(!order)} />
        Check to re-order
      </label>

      <div className="container">
        <div className="column">
          <h4>Inputs have no key</h4>
          <p>type something and re-order</p>

          {inputs.map((val) => (
            <Input
              label={`Input ${val}`}
              placeholder="Enter 12 digits"
              onChange={() => {}}
              id="company-tax-id"
            />
          ))}
        </div>

        <div className="column">
          <h4>Inputs with proper keys</h4>
          <p>type something and re-order</p>

          {inputs.map((val) => (
            <Input
              key={val}
              label={`Input ${val}`}
              placeholder="Enter 12 digits"
              onChange={() => {}}
              id="company-tax-id"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
