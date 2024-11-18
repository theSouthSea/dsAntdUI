import { MouseEvent, useState } from "react"

import Modal from "./Modal"

export default function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const handleWrapperClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log("handleWrapperClick-e.target=", e.target)
    console.log("handleWrapperClick-e.currentTarget=", e.currentTarget)
  }

  return (
    <div onClick={handleWrapperClick}>
      <button onClick={openModal}>打开模态框</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>这是一个模态框</h2>
        <p>模态框的内容可以是任何 React 组件。</p>
        <button onClick={closeModal}>关闭</button>
      </Modal>
    </div>
  )
}
