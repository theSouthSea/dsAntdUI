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

const TextPlaceholder = () => <p>Hello human! No tax for you</p>

export default function App() {
  const [isReverse, setIsReverse] = useState(false)

  return (
    <div className="App">
      <h1>Am I a person or a business?</h1>
      <p>Type something in one field and turn the checkbox on and off</p>
      <div className="container">
        <div className="column">
          <h4>Input will unmount and mount</h4>
          <label>
            <input type="checkbox" onChange={() => setIsReverse(!isReverse)} />
            Check to revere
          </label>

          <Input
            label="Input number one"
            placeholder="Enter 12 digits"
            onChange={() => {}}
            id="company-tax-id"
            key={isReverse ? "some-key" : null}
          />

          <Input
            label="Input number two"
            placeholder="Enter 12 digits"
            onChange={() => {}}
            id="company-tax-id"
            key={!isReverse ? "some-key" : null}
          />
        </div>
      </div>
    </div>
  )
}
