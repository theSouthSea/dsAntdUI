import { inject, observer } from "mobx-react"

const Child2 = ({ store }) => {
  return (
    <>
      count:{store?.count}|double:{store?.double}
      <button onClick={() => store.increase()}>increase</button>
      <button onClick={() => store.decrease()}>decrease</button>
    </>
  )
}
export default inject("store")(observer(Child2))
