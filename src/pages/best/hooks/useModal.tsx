import { useEffect, useMemo, useRef, useState } from "react"

import { ModalBase } from "./BaseDialog"

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      setScroll(element?.scrollTop || 0)
    }

    element.addEventListener("scroll", handleScroll)
    return () => {
      element.removeEventListener("scroll", handleScroll)
    }
  })

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  // const Dialog = () => <ModalBase onClosed={close} isOpen={isOpen} ref={ref} />
  const Dialog = useMemo(() => {
    return () => <ModalBase onClosed={close} isOpen={isOpen} ref={ref} />
  }, [isOpen])

  return { isOpen, Dialog, open, close }
}
