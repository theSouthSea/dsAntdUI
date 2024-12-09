import { useState } from "react"

import Modal from "./Modal"

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="app">
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* 模态框内容 */}
        <p>This is a modal.</p>
      </Modal>
    </div>
  )
}

export default App
