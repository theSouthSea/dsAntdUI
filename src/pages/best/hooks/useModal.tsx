import { useState } from "react"

import { ModalBase } from "./BaseDialog"

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const Dialog = () => <ModalBase onClosed={close} isOpen={isOpen} />

  return { isOpen, Dialog, open, close }
}
