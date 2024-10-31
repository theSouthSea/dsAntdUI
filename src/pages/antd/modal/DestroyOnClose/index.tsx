import { Button } from "antd"
import { useState } from "react"

import SimpleModal from "./SimpleModal"
import SimpleModalWrapper from "./SimpleModalWrapper"

const DestroyOnclose = () => {
  const [open, setOpen] = useState(false)
  const [openModalWrapper, setOpenModalWrapper] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleModalWrapperClose = () => {
    setOpenModalWrapper(false)
  }
  const handleModalWrapperOpen = () => {
    setOpenModalWrapper(true)
  }
  return (
    <>
      <div>
        DestroyOnclose默认为false,为true,在关闭时,会销毁子组件;打开时,就会重新挂在子组件,这样子组件的状态就会重置
      </div>
      <Button onClick={handleOpen}>打开弹框</Button>
      <Button onClick={handleModalWrapperOpen}>打开包含子组件的弹框</Button>
      <SimpleModal open={open} onClose={handleClose} destroyOnClose></SimpleModal>
      <SimpleModalWrapper
        open={openModalWrapper}
        onClose={handleModalWrapperClose}
        destroyOnClose={true}
      ></SimpleModalWrapper>
    </>
  )
}
export default DestroyOnclose
