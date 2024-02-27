import { ReactNode } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import { createStore } from "redux"

interface State {
  name: string
  country: string
  discount: string
}
// 解决方案1：提供默认值给每个属性
// const defaultState: State = {
//   name: '',
//   country: '',
//   discount: '',
// };
const store = createStore((state: State = {} as State, action: any) => {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.payload }
    case "updateCountry":
      return { ...state, country: action.payload }
    case "updateDiscount":
      return { ...state, discount: action.payload }
    default:
      return state
  }
})

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}

export const useFormDiscount = () => useSelector((state: State) => state.discount)
export const useFormCountry = () => useSelector((state: State) => state.country)
export const useFormName = () => useSelector((state: State) => state.name)

export const useFormAPI = () => {
  const dispatch = useDispatch()

  return {
    onCountryChange: (value: string) => {
      dispatch({ type: "updateCountry", payload: value })
    },
    onDiscountChange: (value: string) => dispatch({ type: "updateDiscount", payload: value }),
    onNameChange: (value: string) => dispatch({ type: "updateName", payload: value }),
    onSave: () => {},
  }
}
