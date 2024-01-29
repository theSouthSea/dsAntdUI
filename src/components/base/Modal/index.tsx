import styled from "@emotion/styled"
import { Button } from "antd"
import { ReactNode, forwardRef, useImperativeHandle, useState, MouseEvent } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
  content: ReactNode
  btn: ReactNode
  onConfirm: (e: MouseEvent) => void
  onCancel?: (e: MouseEvent) => void
}
const ModalContainer = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`
const ModalWrapper = styled("div")`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 9999;
`
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

export interface ModalRef {
  onOpenModal: () => void
  onCloseModal: () => void
}
const Modal = forwardRef<ModalRef, ModalProps>(({ content, btn, onConfirm }, ref) => {
  const [open, setOpen] = useState(false)
  useImperativeHandle(ref, () => ({
    onOpenModal: () => {
      setOpen(true)
    },
    onCloseModal: () => {
      setOpen(false)
    },
  }))
  const handleCancel = () => {
    setOpen(false)
  }
  const ModalEle = (
    <ModalContainer>
      <ModalWrapper>
        <ModalContent>{content}</ModalContent>
        <ModalFooter>
          {btn ? (
            btn
          ) : (
            <Button type="primary" onClick={onConfirm}>
              确定
            </Button>
          )}
          <Button onClick={handleCancel}>取消</Button>
        </ModalFooter>
      </ModalWrapper>
    </ModalContainer>
  )
  return open ? createPortal(ModalEle, document.body) : null
})
export default Modal
