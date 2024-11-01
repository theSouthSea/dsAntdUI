import { message, Modal } from "antd"
import { useEffect, useRef, useState } from "react"

import EditContent, { EditContentRef } from "./EditContent"

interface EditContentModalProps {
  content: string
  id?: string
  open: boolean
  onCancel: () => void
  onOk: (value: string) => Promise<boolean>
}
const EditContentModal = (props: EditContentModalProps) => {
  const { content, open, onCancel, onOk } = props
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false)
  const contentRef = useRef<EditContentRef>(null)
  const handleOk = async () => {
    setConfirmLoading(true)
    const value = contentRef.current?.getValue()
    if (!value) {
      message.error("内容不能为空")
      return
    }
    const res = await onOk(value)
    setConfirmLoading(false)
  }
  const initState = () => {
    setConfirmLoading(false)
  }
  const handleCancel = () => {
    initState()
    onCancel()
  }
  return (
    <Modal
      open={open}
      title="编辑内容"
      onOk={handleOk}
      onCancel={handleCancel}
      okText="确定"
      cancelText="取消"
      confirmLoading={confirmLoading}
    >
      <EditContent value={content} ref={contentRef}></EditContent>
    </Modal>
  )
}
export default EditContentModal
