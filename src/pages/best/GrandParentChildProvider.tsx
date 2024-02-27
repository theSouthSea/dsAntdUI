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

export const useGrandAPIContext = () => useContext(GrandAPIContext)
export const useGrandCountContext = () => useContext(GrandCountContext)
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
const GrandProvider = ({ children }: { children: ReactElement }) => {
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
      {/* {children} */}
      <GrandCountContext.Provider value={state.count}>{children}</GrandCountContext.Provider>
    </GrandAPIContext.Provider>
  )
}
export default GrandProvider
