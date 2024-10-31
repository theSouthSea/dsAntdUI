import { Button, Modal } from "antd"

import useCount from "@/hooks/counter/useCount"

import SimpleModalContent from "./SimpleModalContent"

interface SimpleModalProps {
  open: boolean
  onClose: () => void
  destroyOnClose?: boolean
  forceRender?: boolean
}
const SimpleModal = (props: SimpleModalProps) => {
  const { open, onClose, destroyOnClose = false, forceRender = false } = props
  const { count, increment, decrement } = useCount()
  console.log("SimpleModal-render-count=", count, forceRender)
  return (
    <Modal open={open} onCancel={onClose} destroyOnClose={destroyOnClose} forceRender={forceRender}>
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
      <SimpleModalContent></SimpleModalContent>
    </Modal>
  )
}
export default SimpleModal
