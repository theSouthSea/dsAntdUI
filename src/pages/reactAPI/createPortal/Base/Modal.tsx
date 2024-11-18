import React, { useRef, useState } from "react"
import { createPortal } from "react-dom"

// import styles from " ./index.module.less"
import styles from "./index.module.less"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  // return React.createElement(
  //   'div',
  //   {
  //     className: 'modal-overlay',
  //     onClick: handleOutsideClick,
  //     onKeyDown: handleKeyDown,
  //     tabIndex: 0,
  //     role: 'dialog',
  //   },
  //   React.createElement(
  //     'div',
  //     {
  //       className: 'modal-content',
  //       ref: modalRef,
  //     },
  //     children,
  //   ),
  // );
  return createPortal(
    React.createElement(
      "div",
      {
        className: "modal-overlay",
        onClick: handleOutsideClick,
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        role: "dialog",
      },
      React.createElement(
        "div",
        {
          className: `modal-content ${styles.modalContent}`,
          ref: modalRef,
        },
        children,
      ),
    ),
    document.body,
  )
}

export default Modal
