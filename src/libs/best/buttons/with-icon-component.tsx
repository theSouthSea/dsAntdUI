import React, { ComponentType, ReactNode, useState } from "react"

import { IconProps, IconStateProps } from "./types"

type ButtonProps = {
  children: ReactNode
  Icon: ComponentType<IconProps>
}

export const ButtonWithIconComponent = ({ children, Icon }: ButtonProps) => {
  return (
    <button className="button">
      <span className="button-icon">
        <Icon fontSize="small" />
      </span>
      <span>{children}</span>
    </button>
  )
}
type ButtonStateProps = {
  children: ReactNode
  Icon: ComponentType<IconStateProps>
}

export const ButtonWithIconComponentState = ({ children, Icon }: ButtonStateProps) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <button
      className="button"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <span className="button-icon">
        <Icon fontSize="small" isHovered={isHovered} />
      </span>
      <span>{children}</span>
    </button>
  )
}
