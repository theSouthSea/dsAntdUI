import { Button, Spin } from "antd"
import { useState } from "react"
import { createPortal } from "react-dom"

import styles from "./index.module.less"

const FullScreenSpin = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const handleFullScreen = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }
  return (
    <>
      <div>FullScreenSpin</div>
      <Button onClick={handleFullScreen}>打开全屏Spin</Button>
      <p>
        通过createPortal()将Spin组件渲染到body上,避免overflow,transform对position:fixed定位元素的影响
      </p>
      <p>width:'100%',height:'100%',避免100vh,100vw不正确的问题</p>
      {/* {createPortal(<Spin spinning={true} fullscreen></Spin>, document.body)} */}
      {createPortal(
        <Spin
          spinning={loading}
          fullscreen
          className={`${styles.fullScreenSpin} fullScreenSpinT`}
          style={{ width: "100%", height: "100%" }}
        ></Spin>,
        document.body,
      )}
    </>
  )
}
export default FullScreenSpin
