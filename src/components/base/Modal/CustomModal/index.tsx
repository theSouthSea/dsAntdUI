import { Modal, ModalProps } from "antd"

import Footer from "./Footer"

interface CustomModalProps extends ModalProps {
  onOk: NonNullable<ModalProps["onOk"]>
  onCancel: NonNullable<ModalProps["onCancel"]>
  okText?: string
  cancelText?: string
}
const CustomModal = (props: CustomModalProps) => {
  const { footer, okText, cancelText, onOk, onCancel, ...rest } = props
  const footerJsx = footer ? (
    footer
  ) : (
    <Footer okText={okText} cancelText={cancelText} onOk={onOk} onCancel={onCancel}></Footer>
  )
  return <Modal footer={footerJsx} onCancel={onCancel} {...rest}></Modal>
}
export default CustomModal
