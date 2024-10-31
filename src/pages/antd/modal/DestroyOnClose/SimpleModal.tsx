import { Button, Modal } from "antd"

import useCount from "@/hooks/counter/useCount"

interface SimpleModalProps {
  open: boolean
  onClose: () => void
  destroyOnClose?: boolean
}
const SimpleModal = (props: SimpleModalProps) => {
  const { open, onClose, destroyOnClose = false } = props
  const { count, increment, decrement } = useCount()
  console.log("SimpleModal-render-count=", count)
  return (
    <Modal open={open} onCancel={onClose} destroyOnClose={destroyOnClose}>
      <div>
        <h1>SimpleModal</h1>
        <p>
          <Button type="primary" onClick={increment}>
            +1
          </Button>
          <span>count:{count}</span>
          <Button type="default" onClick={decrement}>
            -1
          </Button>
        </p>
      </div>
    </Modal>
  )
}
export default SimpleModal
