import { ReactNode, useEffect, useState } from "react"

interface State {
  content: ReactNode
  type: "info" | "warning" | "success"
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
  const [state, setState] = useState<State>({
    content: "好好学习,天天向上",
    type: "info",
  })
  useEffect(() => {
    console.log("useEffect-state", state)
  }, [state])
  console.log("useStore", state)
  return {
    state,
    add: (config: State) => {
      setState((prev) => {
        const target = {
          ...prev,
          ...config,
        }
        console.log("add", config, target)
        return target
      })
    },
    remove: () => {
      console.log("remove")
    },
  }
}
export default useStore
