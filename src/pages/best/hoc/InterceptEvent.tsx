/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useEffect, useState } from "react"

import { ButtonWithLoggingOnClick } from "@/components/demo/hocs/buttons"
import { Modal, ModalWithSupressKeyPress } from "@/components/demo/hocs/modal"

const pageCss = css``

export const Page = () => {
  const [pressed, setPressed] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalWithBlockingOpen, setIsModalWithBlockingOpen] = useState(false)

  useEffect(() => {
    const keyPressListener = (event) => {
      const newValue = `${pressed}${event.key}`
      console.log(newValue)
      setPressed(newValue)
    }

    window.addEventListener("keypress", keyPressListener)

    return () => window.removeEventListener("keypress", keyPressListener)
  }, [pressed])

  return (
    <div css={pageCss}>
      <h3>Pressed keys</h3>
      {pressed}

      <h3>Open modal dialog</h3>
      <ButtonWithLoggingOnClick onClick={() => setIsModalWithBlockingOpen(true)}>
        Open dialog with focus blocking
      </ButtonWithLoggingOnClick>
      {isModalWithBlockingOpen ? (
        <ModalWithSupressKeyPress onClose={() => setIsModalWithBlockingOpen(false)} />
      ) : null}
      <ButtonWithLoggingOnClick onClick={() => setIsModalOpen(true)}>
        Open dialog with without focus blocking
      </ButtonWithLoggingOnClick>
      {isModalOpen ? <Modal onClose={() => setIsModalOpen(false)} /> : null}
    </div>
  )
}
export default function App() {
  return (
    <div className="App">
      <Page />
    </div>
  )
}
