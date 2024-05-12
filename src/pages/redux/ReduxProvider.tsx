import { Provider } from "react-redux"

import { store } from "@/store"

import { Counter } from "./ReduxDemo"

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
export default ReduxProvider
