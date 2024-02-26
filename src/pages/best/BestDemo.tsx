import "./styles.css"
import React, { useState } from "react"
import { Country } from "@/libs/best/select-country-library"
import { PersonalInfoSection } from "@/components/demo/best/step1/personal-info-section"
import { ValueCalculationsSection } from "@/components/demo/best/step1/value-calculation-section"
import { ActionsSection } from "@/components/demo/best/step1/actions-section"

type State = {
  name: string
  country: Country
  discount: number
}

const defaultState = {}

const Form = () => {
  const [state, setState] = useState<State>(defaultState as State)
  console.info("Form render")

  const onSave = () => {
    // send the request to the backend here
  }

  const onDiscountChange = (discount: number) => {
    setState({ ...state, discount })
  }

  const onNameChange = (name: string) => {
    setState({ ...state, name })
  }

  const onCountryChange = (country: Country) => {
    setState({ ...state, country })
  }

  return (
    <div className="App">
      <PersonalInfoSection
        onNameChange={onNameChange}
        onCountryChange={onCountryChange}
        discount={state.discount}
        name={state.name}
      />
      <ValueCalculationsSection onDiscountChange={onDiscountChange} />
      <ActionsSection onSave={onSave} />
    </div>
  )
}

export default function App() {
  return <Form />
}
