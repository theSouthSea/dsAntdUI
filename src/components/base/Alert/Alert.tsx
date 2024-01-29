import { ReactNode } from "react"
import { Modal } from "antd"
import ReactDOM from "react-dom"
// import {Action} from 'antdv/lib/modal/index.d.ts'
interface Action {
  text: string
  onPress?: () => void | Promise<void>
}
const stopMove = (e: any) => e.preventDefault()
export default function alert(
  title: ReactNode,
  message: ReactNode,
  actions: Action[] = [{ text: "知道了" }]
) {
  const div = document.createElement("div")
  document.body.appendChild(div)
  const close = () => {
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    document.body.removeEventListener("touchmove", stopMove)
  }
  // antd-mobile
  // const footer = actions.map((button: Action<CSSProperties>, index) => {
  //   const oldOnPress = button.onPress || (() => {});
  // button.onPress = () => {
  //   const res = oldOnPress();
  //   if(res && res.then){
  //     res.then(close).catch(() => {})
  //   }else{
  //     close()
  //   }
  // }

  //   return button;
  // })
  // 解决ios上的滑动穿透问题
  document.body.addEventListener("touchmove", stopMove, { passive: false })
  // antd
  const footer = actions.map((action, index) => {
    const oldOnPress = action.onPress || (() => {})
    action.onPress = () => {
      const res = oldOnPress()
      if (res && res.then) {
        res.then(close).catch(() => {})
      } else {
        close()
      }
    }
    return (
      <button
        key={index}
        onClick={() => {
          action.onPress?.()
        }}
      >
        {action.text}
      </button>
    )
  })
  ReactDOM.render(
    <Modal
      title={title}
      visible={true}
      // transparent={true}
      footer={footer}
      closable={false}
      maskClosable={false}
    >
      {message}
    </Modal>,
    div
  )
}
