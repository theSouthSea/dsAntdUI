import { Button } from "antd"
import { createContext, ReactElement, useContext, useMemo, useReducer, useState } from "react"

interface GrandContextValue {
  count: number
  setCount: (val: number) => void
}
type GrandAPIContextValue = {
  setCount: (val: number) => void
}
const GrandCountContext = createContext<GrandContextValue["count"]>(
  {} as GrandContextValue["count"]
)
// const GrandAPIContext = createContext<GrandContextValue["setCount"]>(
//   {} as GrandContextValue["setCount"]
// )
const GrandAPIContext = createContext<GrandAPIContextValue>({} as GrandAPIContextValue)

const useGrandAPIContext = () => useContext(GrandAPIContext)
const useGrandCountContext = () => useContext(GrandCountContext)
// { children }: { children: ReactElement }
interface State {
  count: number
}
interface Actions {
  type: "updateCount"
  payload: number
}
function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "updateCount":
      return {
        ...state,
        count: action.payload,
      }
    default:
      return state
  }
}
export const GrandProvider = ({ children }: { children: ReactElement }) => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0 } as State)
  const api = useMemo(() => {
    return {
      setCount: (val: number) => {
        dispatch({
          type: "updateCount",
          payload: val,
        })
      },
    }
  }, [])
  return (
    <GrandAPIContext.Provider value={api}>
      <GrandCountContext.Provider value={state.count}>
        {/* <GrandParentChild></GrandParentChild> */}
        {children}
      </GrandCountContext.Provider>
    </GrandAPIContext.Provider>
  )
}
const GrandParentChild = () => {
  // const { count, setCount } = useGrandContext()
  console.log("Grand")
  // 设置同一个state,组件会更新吗? 不会
  return (
    <div>
      <p>组件在什么时候会重渲染?</p>
      <Parent></Parent>
      <OtherParent></OtherParent>
    </div>
  )
}
const OtherParent = () => {
  const { setCount } = useGrandAPIContext()
  const count = useGrandCountContext()
  console.log("OtherParent")
  // 设置同一个state,组件会更新吗? 不会
  const handleMinus = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <p>另一个父级组件</p>
      <div>
        {/* <Button type="primary" danger onClick={() => setCount(count - 1)}>
          减一
        </Button> */}
        <button onClick={() => setCount(count - 1)}>减一</button>
        <button onClick={handleMinus}>减一</button>
        <span>count:{count}</span>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          加一
        </Button>
        <Button type="default" onClick={() => setCount(count)}>
          count不变
        </Button>
      </div>
    </div>
  )
}
const Parent = () => {
  console.log("Parent")
  return (
    <div>
      <div>父组件</div>
      <Child></Child>
    </div>
  )
}
const Child = () => {
  const count = useGrandCountContext()
  console.log("child")
  return (
    <div>
      <div>子组件</div>
      <div>count:{count}</div>
    </div>
  )
}
// export default GrandProvider
export default GrandParentChild
