import { Modal } from "antd"

import SimpleModalContent from "./SimpleModalContent"

interface SimpleModalProps {
  open: boolean
  onClose: () => void
  destroyOnClose?: boolean
}
const SimpleModal = (props: SimpleModalProps) => {
  const { open, onClose, destroyOnClose = false } = props

  return (
    <Modal open={open} onCancel={onClose} destroyOnClose={destroyOnClose}>
      <SimpleModalContent></SimpleModalContent>
    </Modal>
  )
}
export default SimpleModal
