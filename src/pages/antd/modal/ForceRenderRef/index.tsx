import { Button } from "antd"
import { useState } from "react"

import SimpleModal from "./SimpleModal"
// import SimpleModalWrapper from "./SimpleModalWrapper"

const DestroyOnclose = () => {
  const [open, setOpen] = useState(false)
  // const [openModalWrapper, setOpenModalWrapper] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  // const handleModalWrapperClose = () => {
  //   setOpenModalWrapper(false)
  // }
  // const handleModalWrapperOpen = () => {
  //   setOpenModalWrapper(true)
  // }
  return (
    <>
      <div>forceRender,默认为false,不强制渲染Modal中的子组件</div>
      <Button onClick={handleOpen}>打开弹框</Button>
      {/* <Button onClick={handleModalWrapperOpen}>打开包含子组件的弹框</Button> */}
      <SimpleModal open={open} onClose={handleClose} forceRender={false}></SimpleModal>
    </>
  )
}
export default DestroyOnclose
