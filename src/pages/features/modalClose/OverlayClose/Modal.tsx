// Modal.js
import React, { useState } from "react"

import { StyledModalContent, StyledModalOverlay } from "./styled"

const Modal = ({ isOpen, onClose, children }) => {
  const [isOverlayClicked, setIsOverlayClicked] = useState(false)

  const handleOverlayClick = () => {
    setIsOverlayClicked(true)
    onClose()
  }

  const handleModalContentClick = (e) => {
    e.stopPropagation()
  }

  if (!isOpen) {
    return null
  }

  return (
    <StyledModalOverlay onClick={handleOverlayClick}>
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
