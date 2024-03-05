import { ReactNode } from "react"

import { MessageContainer } from "./styled"

interface MessageProps {
  content: ReactNode
}
const Message = ({ content }: MessageProps) => {
  return <MessageContainer>{content}</MessageContainer>
}
export default Message
