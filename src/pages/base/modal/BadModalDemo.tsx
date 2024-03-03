import { Button, Modal } from "antd"
import React, { useState } from "react"

const App = () => {
  console.log("===app")
  const { MyBtn, MyModal } = useModal()
  return (
    <div>
      <MyBtn type="primary">Click me!</MyBtn>
      <Button type="danger">Danger</Button>
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
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
    </div>
  )
}

export default App

const useModal = () => {
  console.log("===modal")
  const [on, setOn] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const toggle = () => setOn(!on)
  const MyBtn = (props) => <Button {...props} onClick={toggle} />
  const MyModal = ({ onOk, ...props }) => (
    <Modal
      {...props}
      confirmLoading={confirmLoading}
      open={on}
      onOk={async () => {
        if (onOk) {
          setConfirmLoading(true)
          console.log("==setConfirmLoading true", on)
          await onOk()
          setConfirmLoading(false)
          console.log("==setConfirmLoading false", on)
        }
        // await new Promise(resolve => {
        //   setTimeout(() => {
        //     console.log('===hhh')
        //     resolve(1)
        //   }, 1000)
        // })
        toggle()
      }}
      onCancel={toggle}
    />
  )
  return {
    on,
    toggle,
    MyBtn,
    MyModal,
  }
}
