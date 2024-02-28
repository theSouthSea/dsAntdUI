import { useState } from "react"

import { ModalBase } from "./BaseDialog"

export const ModalDialog = ({ trigger }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{trigger}</div>
      <ModalBase isOpen={isOpen} onClosed={() => setIsOpen(false)} />
    </>
  )
}
