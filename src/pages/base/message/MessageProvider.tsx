import {
  createContext,
  forwardRef,
  ReactElement,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react"
import { createPortal } from "react-dom"

import Portal from "../portal"
import { RefProps } from "./interface"
import Message from "./Message"
import useStore from "./useStoreFix"

// const MessageContext = createContext({})
// export const useMessageContext = () => useContext(MessageContext)
interface MessageProviderProps {
  // children: ReactElement
  // content: ReactNode
  [key: string]: any
}

const MessageProvider = forwardRef<RefProps, MessageProviderProps>(function MessagePortal(
  props,
  ref
) {
  const [count, setCount] = useState(0)
  const { state, add, remove, addCount } = useStore()
  console.log("MessageProvider-state", state)
  // if (!ref?.current) {
  //   ref.current = {
  //     add,
  //     remove,
  //     addCount,
  //   }
  // }
  useEffect(() => {
    console.log("mount")
    return () => {
      console.log("unmount")
    }
  }, [])
  useImperativeHandle(ref, () => ({
    add,
    remove,
    addCount,
  }))
  // const message = useMemo(() => {
  //   return state.content ? (
  //     <Message {...props} {...state}>
  //       {state.content}
  //       <br />
  //       count:{state.count}
  //       {/* <button onClick={() => setCount(count + 1)}>add</button> */}
  //       <button onClick={() => addCount()}>add</button>
  //     </Message>
  //   ) : null
  // }, [props, state, count])
  const message = useMemo(() => {
    return (
      <Message {...props} {...state}>
        {state.content}
        <br />
        count:{state.count}
        {/* <button onClick={() => setCount(count + 1)}>add</button> */}
        <button onClick={() => addCount()}>add</button>
      </Message>
    )
  }, [props, state])
  // return createPortal(message, document.body)
  // return message
  return <Portal attach={document.body}>{message}</Portal>
})
MessageProvider.displayName = "MessageProvider"
export default MessageProvider
