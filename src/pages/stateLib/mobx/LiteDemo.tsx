import { observer, useLocalObservable } from "mobx-react-lite"
import { createContext } from "react"

import Child1 from "./components/Children1"
// import Child2 from "./components/Children2"
import Child3 from "./components/Children3"

export const Context = createContext(null)

const Parent = () => {
  // 'useLocalStore' is deprecated, use 'useLocalObservable' instead.
  const storeContext = useLocalObservable(() => ({
    count: 1,
    get double() {
      return this.count * 2
    },
    increase() {
      this.count += 1
    },
    decrease() {
      this.count -= 1
    },
  }))
  return (
    <Context.Provider value={storeContext}>
      <Child1 />
      {/* <Child2 /> */}
      <Child3 />
    </Context.Provider>
  )
}
export default observer(Parent)
