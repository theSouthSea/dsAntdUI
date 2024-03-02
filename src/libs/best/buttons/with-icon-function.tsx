import React, { ReactElement, ReactNode, useState } from "react"

import { IconProps, IconStateProps } from "./types"

type ButtonProps = {
  children: ReactNode
  renderIcon: (settings: { fontSize: IconProps["fontSize"] }) => ReactElement<IconProps>
}

export const ButtonWithIconRenderFunc = ({ children, renderIcon }: ButtonProps) => {
  const icon = renderIcon({
    fontSize: "small",
  })
  return (
    <button className="button">
      <span className="button-icon">{icon}</span>
      <span>{children}</span>
    </button>
  )
}
type ButtonStateProps = {
  children: ReactNode
  renderIcon: (settings: {
    fontSize: IconProps["fontSize"]
    isHovered: boolean
  }) => ReactElement<IconStateProps>
}

export const ButtonWithIconRenderFuncState = ({ children, renderIcon }: ButtonStateProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const icon = renderIcon({
    fontSize: "small",
    isHovered: isHovered,
  })
  return (
    <button
      className="button"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <span className="button-icon">{icon}</span>
      <span>{children}</span>
    </button>
  )
}
