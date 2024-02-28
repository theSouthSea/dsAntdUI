/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React, { RefObject } from "react"

type ModalProps = {
  isOpen: boolean
  onClosed: () => void
}

const modalBodyCss = css`
  position: fixed;
  z-index: 999;
  background: #fff;
  top: 30px;
  bottom: 30px;
  width: 30%;
  left: 50%;
  margin-left: -15%;
  border-radius: 10px;
  padding: 40px;
  overflow: auto;
`

const modalBlanketCss = css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 900;
  background: rgba(0, 0, 0, 0.1);
`
// export const ModalBase = ({ isOpen, onClosed }: ModalProps) => {
//   return isOpen ? (
//     <>
//       <div css={modalBlanketCss} onClick={onClosed} />
//       <div css={modalBodyCss}>Modal dialog content</div>
//     </>
//   ) : null
// }
/* 添加获取模态框滚动位置的功能 */
export const ModalBase = React.forwardRef(
  ({ isOpen, onClosed }: ModalProps, ref: RefObject<any>) => {
    return isOpen ? (
      <>
        <div css={modalBlanketCss} onClick={onClosed} />
        <div css={modalBodyCss} ref={ref}>
          Modal dialog content
        </div>
      </>
    ) : null
  }
)
