import { Button } from "antd"
import { createContext, ReactElement, useContext, useState } from "react"

interface GrandContextValue {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}
// const GrandContext = createContext<GrandContextValue>({} as GrandContextValue)
// const useGrandContext = () => useContext(GrandContext)
// // { children }: { children: ReactElement }
// const GrandProvider = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <GrandContext.Provider value={{ count, setCount }}>
//       {/* {children} */}
//       <GrandParentChild></GrandParentChild>
//     </GrandContext.Provider>
//   )
// }
// const useGrandContext = () => useContext(GrandContext)
// const GrandProvider = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <GrandContext.Provider value={{ count, setCount }}>
//       {/* {children} */}
//       <GrandParentChild></GrandParentChild>
//     </GrandContext.Provider>
//   )
// }
const GrandCountContext = createContext<GrandContextValue["count"]>(
  {} as GrandContextValue["count"]
)
const GrandAPIContext = createContext<GrandContextValue["setCount"]>(
  {} as GrandContextValue["setCount"]
)
const useGrandAPIContext = () => useContext(GrandAPIContext)
const useGrandCountContext = () => useContext(GrandCountContext)
// const GrandProvider = () => {
const GrandProvider = ({ children }: { children: ReactElement }) => {
  const [count, setCount] = useState(0)
  return (
    <GrandAPIContext.Provider value={setCount}>
      <GrandCountContext.Provider value={count}>
        {/* <GrandParentChild></GrandParentChild> */}
        {children}
      </GrandCountContext.Provider>
    </GrandAPIContext.Provider>
  )
}
const GrandParentChild = () => {
  // const [count,setCount] = useState()
  // const { count, setCount } = useGrandContext()
  const setCount = useGrandAPIContext()
  // const count = useGrandCountContext()
  console.log("Grand")
  // 设置同一个state,组件会更新吗? 不会
  return (
    <div>
      <p>组件在什么时候会重渲染?</p>
      <div>
        <Button type="primary" danger onClick={() => setCount((count) => count - 1)}>
          减一
        </Button>
        {/* <span>count:{count}</span> */}
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          加一
        </Button>
        <Button type="default" onClick={() => setCount((count) => count)}>
          count不变
        </Button>
      </div>
      <Parent></Parent>
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
export default function App() {
  return (
    <GrandProvider>
      <GrandParentChild></GrandParentChild>
    </GrandProvider>
  )
}
