import styled from "@emotion/styled"
import { Button } from "antd"
import { ReactNode, forwardRef, useImperativeHandle, useState, MouseEvent } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
  content: ReactNode
  btn: ReactNode
  onConfirm: (e: MouseEvent) => void
  onCancel: (e: MouseEvent) => void
}
const ModalContent = styled("div")`
  display: flex;
  justify-content: center;
  padding: 20px;
`
const ModalFooter = styled("div")`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  row-gap: 10px;
`
const Modal = forwardRef(({ content, btn, onCancel }: ModalProps, ref: any) => {
  const [open, setOpen] = useState(false)
  useImperativeHandle(ref, () => ({
    onOpenModal: () => {
      setOpen(true)
    },
    onCloseModal: () => {
      setOpen(false)
    },
  }))
  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen(false)
    onCancel(e)
  }
  const ModalEle = (
    <div>
      <ModalContent>{content}</ModalContent>
      <ModalFooter>
        {btn}
        <Button onClick={handleCancel}>取消</Button>
      </ModalFooter>
    </div>
  )
  return open ? createPortal(ModalEle, document.body) : null
})
export default Modal
