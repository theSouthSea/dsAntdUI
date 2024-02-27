import { Provider } from "react-redux"

import { Counter } from "./ReduxDemo"
import { store } from "./store"

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
export default ReduxProvider
