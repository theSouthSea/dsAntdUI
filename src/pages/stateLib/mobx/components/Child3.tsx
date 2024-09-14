import { MobXProviderContext, observer } from "mobx-react"
import { useContext } from "react"

const Child3 = () => {
  const { store } = useContext(MobXProviderContext)
  console.log("store=", store)
  return (
    <>
      <h2>Child3</h2>
      <div>
        count:{store?.count}|double:{store?.double}
      </div>
      <button onClick={() => store.increase()}>increase</button>
      <button onClick={() => store.decrease()}>decrease</button>
    </>
  )
}
export default observer(Child3)
