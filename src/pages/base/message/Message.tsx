import { ReactNode } from "react"

import { MessageContainer } from "./styled"

interface MessageProps {
  content: ReactNode
  children: ReactNode
}
const Message = ({ children }: MessageProps) => {
  return <MessageContainer>{children}</MessageContainer>
}
export default Message
