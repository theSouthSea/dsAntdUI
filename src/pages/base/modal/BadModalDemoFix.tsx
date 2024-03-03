import { Button, ButtonProps, Modal, ModalProps } from "antd"
import React, { ComponentType, useState } from "react"

const ModalButton = (props: ButtonProps) => (
  <Button {...props} type="primary" danger>
    Danger
  </Button>
)
const App = () => {
  console.log("===app")
  return (
    <div>
      <MyModal
        title="Simple"
        onOk={async () =>
          new Promise((resolve) => {
            setTimeout(() => {
              console.log("===app resolve")
              resolve(1)
            }, 1000)
          })
        }
        Button={ModalButton}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
    </div>
  )
}

export default App
interface MyModalProps extends ModalProps {
  Button: ComponentType<ButtonProps>
}
const MyModal = ({ Button, onOk, ...props }: MyModalProps) => {
  console.log("===modal")
  const [on, setOn] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const toggle = () => setOn(!on)
  return (
    <>
      <Button onClick={toggle} />
      <Modal
        {...props}
        confirmLoading={confirmLoading}
        open={on}
        onOk={async (e) => {
          if (onOk) {
            setConfirmLoading(true)
            console.log("==setConfirmLoading true", on)
            await onOk(e)
            setConfirmLoading(false)
            console.log("==setConfirmLoading false", on)
          }
          toggle()
        }}
        onCancel={toggle}
      />
    </>
  )
}
