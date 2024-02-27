import { createContext, ReactNode, useContext, useMemo, useReducer } from "react"

import { Country } from "@/libs/best/select-country-library"

type State = {
  name: string
  country: Country
  discount: number
}
// type Context = {
//   state: State
//   onNameChange: (name: string) => void
//   onCountryChange: (name: Country) => void
//   onDiscountChange: (price: number) => void
//   onSave: () => void
// }

// const FormContext = createContext<Context>({} as Context)

/* 优化一,将提升的状态和函数放到Context中 */
// export const FormDataProvider = ({ children }: { children: ReactNode }) => {
// const [state, setState] = useState<State>({} as State)

// const value = useMemo(() => {
//   const onSave = () => {
//     // send the request to the backend here
//   }

//   const onDiscountChange = (discount: number) => {
//     setState({ ...state, discount })
//   }

//   const onNameChange = (name: string) => {
//     setState({ ...state, name })
//   }

//   const onCountryChange = (country: Country) => {
//     setState({ ...state, country })
//   }

//   return {
//     state,
//     onSave,
//     onDiscountChange,
//     onNameChange,
//     onCountryChange,
//   }
// }, [state])

//   return <FormContext.Provider value={value}>{children}</FormContext.Provider>
// }
// export const useFormState = () => useContext(FormContext)

/* 优化二,分离状态和API */

type API = {
  onNameChange: (name: string) => void
  onCountryChange: (name: Country) => void
  onDiscountChange: (price: number) => void
  onSave: () => void
}

// const FormDataContext = createContext<State>({} as State)
const FormAPIContext = createContext<API>({} as API)
export const useFormAPI = () => useContext(FormAPIContext)
// export const useFormData = () => useContext(FormDataContext)

/* 优化三-继续细分状态 */
const FormNameContext = createContext<State["name"]>({} as State["name"])
const FormCountryContext = createContext<State["country"]>({} as State["country"])
const FormDiscountContext = createContext<State["discount"]>({} as State["discount"])

export const useFormName = () => useContext(FormNameContext)
export const useFormCountry = () => useContext(FormCountryContext)
export const useFormDiscount = () => useContext(FormDiscountContext)
type Actions =
  | { type: "updateName"; name: string }
  | { type: "updateCountry"; country: Country }
  | { type: "updateDiscount"; discount: number }

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.name }
    case "updateDiscount":
      return { ...state, discount: action.discount }
    case "updateCountry":
      return { ...state, country: action.country }
  }
}
export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  // state logic
  // const [state, setState] = useState<State>({} as State)
  const [state, dispatch] = useReducer(reducer, {} as State)

  const api = useMemo(() => {
    const onSave = () => {
      // send the request to the backend here
    }

    const onDiscountChange = (discount: number) => {
      // setState({ ...state, discount })
      dispatch({ type: "updateDiscount", discount })
    }

    const onNameChange = (name: string) => {
      dispatch({ type: "updateName", name })
    }

    const onCountryChange = (country: Country) => {
      dispatch({ type: "updateCountry", country })
    }

    return {
      onSave,
      onDiscountChange,
      onNameChange,
      onCountryChange,
    }
  }, [])
  return (
    // <FormAPIContext.Provider value={api}>
    //   <FormDataContext.Provider value={state}>{children}</FormDataContext.Provider>
    // </FormAPIContext.Provider>
    <FormAPIContext.Provider value={api}>
      <FormNameContext.Provider value={state.name}>
        <FormCountryContext.Provider value={state.country}>
          <FormDiscountContext.Provider value={state.discount}>
            {children}
          </FormDiscountContext.Provider>
        </FormCountryContext.Provider>
      </FormNameContext.Provider>
    </FormAPIContext.Provider>
  )
}
