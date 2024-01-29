import { useMemo, useRef, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import alert from "@/components/base/Alert/Alert"
import MyModal, { ModalRef } from "@/components/base/Modal"
import { Button } from "antd"

function App() {
  const [count, setCount] = useState(0)
  const handleAlert = () => {
    alert("title", "hello world")
  }
  const modalRef = useRef<ModalRef>(null)
  const handleMyModal = () => {
    modalRef.current?.onOpenModal()
  }
  const handleConfirm = () => {
    modalRef.current?.onCloseModal()
    console.log("handleConfirm")
  }
  const modalBtn = useMemo(
    () => (
      <Button type="primary" onClick={handleConfirm}>
        确认
      </Button>
    ),
    []
  )
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleAlert}>打开弹窗</button>
        <button onClick={handleMyModal}>打开我的弹窗</button>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <MyModal
        content="好好学习,天天向上"
        btn={modalBtn}
        onConfirm={handleConfirm}
        ref={modalRef}
      ></MyModal>
    </>
  )
}

export default App
