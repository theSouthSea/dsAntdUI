import React, { ReactElement, ReactNode, useState } from "react"

import { IconProps, IconStateProps } from "./types"

type ButtonProps = {
  children: ReactNode
  icon: ReactElement<IconProps>
}
type ButtonStateProps = {
  children: ReactNode
  icon: ReactElement<IconStateProps>
}

export const ButtonWithIconElement = ({ children, icon }: ButtonProps) => {
  const clonedIcon = React.cloneElement(icon, {
    fontSize: icon.props.fontSize || "small",
  })

  return (
    <button className="button">
      <span className="button-icon">{clonedIcon}</span>
      <span>{children}</span>
    </button>
  )
}
export const ButtonWithIconElementState = ({ children, icon }: ButtonStateProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const clonedIcon = React.cloneElement(icon, {
    fontSize: icon.props.fontSize || "small",
    isHovered: isHovered,
  })

  return (
    <button
      className="button"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <span className="button-icon">{clonedIcon}</span>
      <span>{children}</span>
    </button>
  )
}
{
  /* <ButtonWithIconElement
  icon={<AlarmIconWithHoverForElement />}
>
  button here
</ButtonWithIconElement> */
}
