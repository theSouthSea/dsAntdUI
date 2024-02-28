import { useRef } from "react"

import { ModalBase } from "./BaseDialog"
import { useScroll } from "./useModal"

interface ModalProps {
  [k: string]: any
  onClosed: () => void
  isOpen: boolean
}
const ModalBaseWithAnalytics = (props: ModalProps) => {
  const ref = useRef<HTMLElement>(null)
  const scroll = useScroll(ref)

  console.log(scroll)

  return <ModalBase {...props} ref={ref} />
}
export default ModalBaseWithAnalytics
