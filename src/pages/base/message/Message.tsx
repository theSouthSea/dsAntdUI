import { ReactNode } from "react"

import { MessageContainer } from "./styled"
// Typescript类型定义,两个属性至少出现其中一个
type MessageProps =
  | {
      content: ReactNode
      children?: ReactNode
    }
  | { content?: ReactNode; children: ReactNode }
// interface MessageProps {
//   children?: ReactNode
//   content?: ReactNode
// }
const Message = ({ children, content }: MessageProps) => {
  return <MessageContainer>{children || content}</MessageContainer>
}
export default Message
