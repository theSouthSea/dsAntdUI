import { Country } from "@/libs/best/select-country-library"
import { ReactNode, createContext, useContext, useMemo, useState } from "react"

type State = {
  name: string
  country: Country
  discount: number
}

type Context = {
  state: State
  onNameChange: (name: string) => void
  onCountryChange: (name: Country) => void
  onDiscountChange: (price: number) => void
  onSave: () => void
}

const FormContext = createContext<Context>({} as Context)

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>({} as State)

  const value = useMemo(() => {
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

    return {
      state,
      onSave,
      onDiscountChange,
      onNameChange,
      onCountryChange,
    }
  }, [state])

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
export const useFormState = () => useContext(FormContext)
