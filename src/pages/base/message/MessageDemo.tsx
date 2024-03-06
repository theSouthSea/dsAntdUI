import { Button } from "antd"
import { useState } from "react"
import { createPortal } from "react-dom"

import ConfigContextProvider from "../context/ConfigContext"
import Message from "./Message"
import { messageUtils } from "./messageUtils"
import useMessage from "./useMessage"

function MyMessage() {
  return createPortal(<Message>hello world</Message>, document.body)
}
const MessageDemo = () => {
  const [open, setOpen] = useState(false)
  const message = useMessage()
  console.log("app-message", message)
  const handleClick = () => {
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }
  return (
    <>
      <Button
        onClick={() => {
          message?.add({
            type: "info",
            content: "This is an info message!",
          })
        }}
      >
        Open Message
      </Button>
      <Button
        onClick={() => {
          message?.addCount()
        }}
      >
        add count
      </Button>
      <Button
        onClick={() => {
          messageUtils.add({
            type: "info",
            content: "render message by method!",
          })
        }}
      >
        render message by method
      </Button>
      <Button onClick={handleClick}>Open MyMessage</Button>
      {open ? <MyMessage></MyMessage> : null}
    </>
  )
}
// export default MessageDemo
const Wrapper = () => {
  return (
    <div>
      {/* <Wrapper1></Wrapper1> */}
      <MessageDemo></MessageDemo>
    </div>
  )
}
// const Wrapper1 = () => {
//   return (
//     <div>
//       <MessageDemo></MessageDemo>
//     </div>
//   )
// }
export default function App() {
  return (
    <ConfigContextProvider>
      <Wrapper></Wrapper>
    </ConfigContextProvider>
  )
}
