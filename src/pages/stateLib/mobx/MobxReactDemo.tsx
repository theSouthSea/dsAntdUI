import { Provider } from "mobx-react"
import { observer, useLocalObservable } from "mobx-react-lite"

import Child1 from "./components/Child1"
import Child2 from "./components/Child2"
import Child3 from "./components/Child3"

const Parent = () => {
  // 也可以使用mobx创建一个store
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
    <Provider store={storeContext}>
      <Child1 />
      <Child2 />
      <Child3></Child3>
    </Provider>
  )
}
export default observer(Parent)
