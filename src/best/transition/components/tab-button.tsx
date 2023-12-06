import React from 'react'

type NavButtonProps = {
  isActive?: boolean
  isLoading?: boolean
  name: string
  onClick: () => void
}

export const TabButton = ({ name, onClick, isActive, isLoading }: NavButtonProps) => {
  return (
    <button onClick={onClick} className={`tab-button ${isActive ? 'active' : ''}`}>
      {name}
      {isLoading ? ' 🤔...' : ''}
    </button>
  )
}
