import { Button } from "antd"
import { useState } from "react"
import { createPortal } from "react-dom"

import ConfigContextProvider from "../context/ConfigContext"
import Message from "./Message"
import useMessage from "./useMessage"

function MyMessage() {
  return createPortal(<Message content="hello world"></Message>, document.body)
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
      <Button onClick={handleClick}>Open MyMessage</Button>
      {open ? <MyMessage></MyMessage> : null}
    </>
  )
}
// export default MessageDemo
const Wrapper = () => {
  return (
    <div>
      <MessageDemo></MessageDemo>
    </div>
  )
}
export default function App() {
  return (
    <ConfigContextProvider>
      <Wrapper></Wrapper>
    </ConfigContextProvider>
  )
}
