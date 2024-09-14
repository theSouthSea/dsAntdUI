import { reaction, toJS, when } from "mobx"
import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"

import { Context } from "../LiteDemo"

const Child1 = () => {
  const store = useContext(Context)
  useEffect(() => {
    console.log("store:", toJS(store))
    reaction(
      () => store.count,
      (cur, pre) => {
        console.log(`cur: ${cur}, pre: ${pre}`)
      },
    )
    when(
      () => store.count < 0,
      () => {
        console.log("...")
      },
    )
  }, [store])
  // [mobx-react-lite] 'useObserver(fn)' is deprecated
  // Use `<Observer>{fn}</Observer>`instead, or wrap the entire component in `observer`
  return (
    <div>
      count: {store?.count}|double:{store?.double}
      <button onClick={() => store.increase()}>increase</button>
      <button onClick={() => store.decrease()}>decrease</button>
    </div>
  )
}
export default observer(Child1)
