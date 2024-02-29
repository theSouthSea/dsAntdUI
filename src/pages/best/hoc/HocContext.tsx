import { createContext, ReactNode, useContext, useMemo, useState } from "react"

type Context = {
  id: string
  name: string
  country: string
  setId: (val: string) => void
  setName: (val: string) => void
  setCountry: (val: string) => void
}

const defaultValue = {
  id: "FormId",
  name: "",
  country: "china",
  setId: () => undefined,
  setName: () => undefined,
  setCountry: () => undefined,
}

const FormContext = createContext<Context>(defaultValue)

export const useFormContext = () => useContext(FormContext)

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(defaultValue)

  const value = useMemo(() => {
    return {
      id: state.id,
      name: state.name,
      country: state.country,
      setId: (id: string) => setState({ ...state, id }),
      setName: (name: string) => setState({ ...state, name }),
      setCountry: (country: string) => setState({ ...state, country }),
    }
  }, [state])

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
