import { Button } from "antd"
import { useEffect, useRef, useState } from "react"

interface EditableChildProps {
  content: string
}
const EditableChild = (props: EditableChildProps) => {
  const { content } = props
  // const [localContent, setLocalContent] = useState(content)
  const contentRef = useRef<HTMLDivElement>(null)
  if (contentRef.current) {
    contentRef.current.innerHTML = content
  }
  // useEffect(() => {
  //   setLocalContent(content)
  // }, [content])
  const handleReset = () => {
    // setLocalContent(content)
    if (contentRef.current) {
      contentRef.current.innerHTML = content
    }
  }
  // const handleInput = (e: React.ChangeEvent<HTMLDivElement>) => {
  //   setLocalContent(e.target.innerText)
  // }
  return (
    <>
      <div>EditableChild</div>
      <div contentEditable={true} ref={contentRef}>
        {content}
      </div>
      <Button onClick={handleReset}>重置</Button>
    </>
  )
}
export default EditableChild
