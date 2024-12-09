import React, { MouseEvent, useEffect, useRef, useState } from "react"

import { StyledModalContent, StyledModalOverlay } from "./styled"

const Modal = ({ isOpen, onClose, children }) => {
  const [isModalClicked, setIsModalClicked] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    // if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    //   setIsModalClicked(true)
    //   onClose()
    // }
    event.stopPropagation()
  }

  const handleModalContentClick = (e) => {
    e.stopPropagation()
  }
  console.log("Modal-render")
  useEffect(() => {
    console.log("useEffect-mount=", isModalClicked)
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalClicked(true)
        onClose()
      }
    }
    const handleOutsideClick = (event) => {
      console.log("handleOutsideClick=", isModalClicked)
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalClicked(true)
        onClose()
      }
    }
    document.addEventListener("click", handleOutsideClick)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      console.log("useEffect-unmount=", isModalClicked)
      document.removeEventListener("click", handleOutsideClick)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  if (!isOpen) {
    return null
  }

  return (
    <StyledModalOverlay onClickCapture={handleClickOutside} ref={modalRef}>
      <StyledModalContent onClick={handleModalContentClick}>
        {children}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </StyledModalContent>
    </StyledModalOverlay>
  )
}

export default Modal
