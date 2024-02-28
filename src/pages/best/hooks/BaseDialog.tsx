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
// export const ModalBase = React.forwardRef(
//   ({ isOpen, onClosed }: ModalProps, ref: RefObject<any>) => {
//     return isOpen ? (
//       <>
//         <div css={modalBlanketCss} onClick={onClosed} />
//         <div css={modalBodyCss} ref={ref}>
//           Modal dialog content
//         </div>
//       </>
//     ) : null
//   }
// )
export const ModalBase = React.forwardRef<any, ModalProps>(({ isOpen, onClosed }, ref) => {
  return isOpen ? (
    <>
      <div css={modalBlanketCss} onClick={onClosed} />
      <div css={modalBodyCss} ref={ref}>
        <h3>Try React</h3>
        <p>
          React has been designed from the start for gradual adoption, and you can use as little or
          as much React as you need. Whether you want to get a taste of React, add some
          interactivity to a simple HTML page, or start a complex React-powered app, the links in
          this section will help you get started.
        </p>
        <h3>Online Playgrounds</h3>
        <p>
          If you’re interested in playing around with React, you can use an online code playground.
          Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.
        </p>
        <p>
          If you prefer to use your own text editor, you can also download this HTML file, edit it,
          and open it from the local filesystem in your browser. It does a slow runtime code
          transformation, so we’d only recommend using this for simple demos.
        </p>
        <h3>Add React to a Website</h3>
        <p>
          You can add React to an HTML page in one minute. You can then either gradually expand its
          presence, or keep it contained to a few dynamic widgets.
        </p>
        <h3>Create a New React App</h3>
        <p>
          When starting a React project, a simple HTML page with script tags might still be the best
          option. It only takes a minute to set up!
        </p>
        <p>
          As your application grows, you might want to consider a more integrated setup. There are
          several JavaScript toolchains we recommend for larger applications. Each of them can work
          with little to no configuration and lets you take full advantage of the rich React
          ecosystem. Learn how.
        </p>{" "}
        <h3>Try React</h3>
        <p>
          React has been designed from the start for gradual adoption, and you can use as little or
          as much React as you need. Whether you want to get a taste of React, add some
          interactivity to a simple HTML page, or start a complex React-powered app, the links in
          this section will help you get started.
        </p>
        <h3>Online Playgrounds</h3>
        <p>
          If you’re interested in playing around with React, you can use an online code playground.
          Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.
        </p>
        <p>
          If you prefer to use your own text editor, you can also download this HTML file, edit it,
          and open it from the local filesystem in your browser. It does a slow runtime code
          transformation, so we’d only recommend using this for simple demos.
        </p>
        <h3>Add React to a Website</h3>
        <p>
          You can add React to an HTML page in one minute. You can then either gradually expand its
          presence, or keep it contained to a few dynamic widgets.
        </p>
        <h3>Create a New React App</h3>
        <p>
          When starting a React project, a simple HTML page with script tags might still be the best
          option. It only takes a minute to set up!
        </p>
        <p>
          As your application grows, you might want to consider a more integrated setup. There are
          several JavaScript toolchains we recommend for larger applications. Each of them can work
          with little to no configuration and lets you take full advantage of the rich React
          ecosystem. Learn how.
        </p>{" "}
        <h3>Try React</h3>
        <p>
          React has been designed from the start for gradual adoption, and you can use as little or
          as much React as you need. Whether you want to get a taste of React, add some
          interactivity to a simple HTML page, or start a complex React-powered app, the links in
          this section will help you get started.
        </p>
        <h3>Online Playgrounds</h3>
        <p>
          If you’re interested in playing around with React, you can use an online code playground.
          Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.
        </p>
        <p>
          If you prefer to use your own text editor, you can also download this HTML file, edit it,
          and open it from the local filesystem in your browser. It does a slow runtime code
          transformation, so we’d only recommend using this for simple demos.
        </p>
        <h3>Add React to a Website</h3>
        <p>
          You can add React to an HTML page in one minute. You can then either gradually expand its
          presence, or keep it contained to a few dynamic widgets.
        </p>
        <h3>Create a New React App</h3>
        <p>
          When starting a React project, a simple HTML page with script tags might still be the best
          option. It only takes a minute to set up!
        </p>
        <p>
          As your application grows, you might want to consider a more integrated setup. There are
          several JavaScript toolchains we recommend for larger applications. Each of them can work
          with little to no configuration and lets you take full advantage of the rich React
          ecosystem. Learn how.
        </p>{" "}
        <h3>Try React</h3>
        <p>
          React has been designed from the start for gradual adoption, and you can use as little or
          as much React as you need. Whether you want to get a taste of React, add some
          interactivity to a simple HTML page, or start a complex React-powered app, the links in
          this section will help you get started.
        </p>
        <h3>Online Playgrounds</h3>
        <p>
          If you’re interested in playing around with React, you can use an online code playground.
          Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.
        </p>
        <p>
          If you prefer to use your own text editor, you can also download this HTML file, edit it,
          and open it from the local filesystem in your browser. It does a slow runtime code
          transformation, so we’d only recommend using this for simple demos.
        </p>
        <h3>Add React to a Website</h3>
        <p>
          You can add React to an HTML page in one minute. You can then either gradually expand its
          presence, or keep it contained to a few dynamic widgets.
        </p>
        <h3>Create a New React App</h3>
        <p>
          When starting a React project, a simple HTML page with script tags might still be the best
          option. It only takes a minute to set up!
        </p>
        <p>
          As your application grows, you might want to consider a more integrated setup. There are
          several JavaScript toolchains we recommend for larger applications. Each of them can work
          with little to no configuration and lets you take full advantage of the rich React
          ecosystem. Learn how.
        </p>{" "}
      </div>
    </>
  ) : null
})
