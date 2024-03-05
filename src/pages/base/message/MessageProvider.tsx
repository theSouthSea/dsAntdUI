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
} from "react"
import { createPortal } from "react-dom"

import Portal from "../portal"
import { RefProps } from "./interface"
import Message from "./Message"
import useStore from "./useStore"

// const MessageContext = createContext({})
// export const useMessageContext = () => useContext(MessageContext)
interface MessageProviderProps {
  // children: ReactElement
  // content: ReactNode
  [key: string]: any
}

const MessageProvider = forwardRef<RefObject<RefProps>, MessageProviderProps>(
  function MessagePortal(props, ref) {
    const { state, add, remove } = useStore()
    console.log("MessageProvider-state", state)
    if (!ref?.current) {
      ref.current = {
        add,
        remove,
      }
    }
    useEffect(() => {
      console.log("mount")
      return () => {
        console.log("unmount")
      }
    }, [])
    // useImperativeHandle(ref, () => ({
    //   add,
    //   remove,
    // }))
    const message = useMemo(() => {
      return <Message {...props} {...state}></Message>
    }, [props, state])
    // return createPortal(message, document.body)
    // return message
    return <Portal attach={document.body}>{message}</Portal>
  }
)
MessageProvider.displayName = "MessageProvider"
export default MessageProvider
