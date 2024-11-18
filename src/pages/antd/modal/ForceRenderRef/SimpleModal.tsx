import { Button, Modal } from "antd"

import useCount from "@/hooks/counter/useCount"

import SimpleModalContent from "./SimpleModalContent"
import SimpleModalContent1 from "./SimpleModalContent1"

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
      <div style={{ height: 400, width: 600, backgroundColor: "#f00" }}>
        <SimpleModalContent></SimpleModalContent>
      </div>
      <div
        style={{
          height: "calc(100vw / var(--zoom) - 400px)",
          width: "100%",
          backgroundColor: "#ff0",
        }}
      >
        <SimpleModalContent1></SimpleModalContent1>
      </div>
    </Modal>
  )
}
export default SimpleModal
