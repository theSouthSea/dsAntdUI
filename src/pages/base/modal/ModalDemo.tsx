import { useRef, useMemo } from "react"
import MyModal, { ModalRef } from "@/components/base/Modal"
import { Button } from "antd"
const ModalDemo = () => {
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
  const modalRef = useRef<ModalRef>(null)
  const handleMyModal = () => {
    modalRef.current?.onOpenModal()
  }
  return (
    <>
      <button onClick={handleMyModal}>打开我的弹窗</button>
      <MyModal
        content="好好学习,天天向上"
        btn={modalBtn}
        onConfirm={handleConfirm}
        ref={modalRef}
      ></MyModal>
    </>
  )
}

export default ModalDemo
