import { ReactNode, useEffect, useState } from "react"

interface State {
  content: ReactNode
  type: "info" | "warning" | "success"
  count: number
}
// const useStore = () => {
//   const [state, setState] = useState<State>({
//     content: "",
//     type: "info",
//   })
//   console.log("useStore", state)
//   return {
//     state,
//     add: (config: State) => {
//       setState((prev) => {
//         const target = {
//           ...prev,
//           ...config,
//         }
//         console.log("add", config, target)
//         return target
//       })
//     },
//     remove: () => {
//       console.log("remove")
//     },
//   }
// }
function useStore() {
  // const [state, setState] = useState<State>({
  //   content: "好好学习,天天向上",
  //   type: "info",
  // })
  const [state, setState] = useState<State>({
    content: "好好学习,天天向上",
    type: "info",
    count: 0,
  } as State)
  useEffect(() => {
    console.log("useEffect-state", state)
  }, [state])
  console.log("useStore", state)
  const add = (config: State) => {
    setState((prev) => {
      const target = {
        ...prev,
        ...config,
      }
      console.log("add", config, target)
      return target
    })
  }
  const remove = () => {
    console.log("remove")
  }
  const addCount = () => {
    setState((prev) => {
      const target = {
        ...prev,
        count: prev.count + 1,
      }
      console.log("addCount", prev, target)
      return target
    })
  }
  return {
    state,
    add,
    remove,
    addCount,
  }
}
export default useStore
