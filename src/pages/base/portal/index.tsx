import { forwardRef } from "react"
import { createPortal } from "react-dom"

const Portal = forwardRef((props: any, ref) => {
  const { attach, children } = props

  return createPortal(children, attach)
})

Portal.displayName = "Portal"
Portal.defaultProps = {
  attach: document.body,
}

export default Portal
