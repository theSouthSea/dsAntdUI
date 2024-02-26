import { ActionsSection } from "./ActionsSection"
import { PersonalInfoSection } from "./PersonalInfoSection"
import { ValueCalculationsSection } from "./Value"
import { Country } from "./step1/select-country-from-component"

type State = {
  name: string
  country: Country
  discount: number
}

const Form = () => {
  const [state, setState] = useState<State>(defaultState as State)

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
    <div>
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
