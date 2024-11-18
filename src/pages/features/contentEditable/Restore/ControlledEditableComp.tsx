import { useEffect, useLayoutEffect, useRef } from "react"

interface EditableChildProps {
  content: string
  onChange: (val: string) => void
}
const EditableChild = (props: EditableChildProps) => {
  const { content, onChange } = props
  // const [localContent, setLocalContent] = useState(content)
  const contentRef = useRef<HTMLDivElement>(null)
  const lastContentRef = useRef<string>(content)
  // if (contentRef.current) {
  //   contentRef.current.innerHTML = content
  //   lastContentRef.current = content
  // }
  useLayoutEffect(() => {
    if (contentRef.current && contentRef.current.innerHTML !== content) {
      contentRef.current.innerHTML = content
    }
  }, [content])
  // useEffect(() => {
  //   setLocalContent(content)
  // }, [content])
  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    console.log("handfleChange-e.target.innerHTML=", e.target.innerHTML)
    console.log("handfleChangecontentRef.current?.innerHTML=", contentRef.current?.innerHTML)
    const currentValue = contentRef.current?.innerHTML || ""
    if (currentValue !== lastContentRef.current) {
      onChange(currentValue)
    }
    lastContentRef.current = currentValue
  }
  return (
    <>
      <div>ControlledEditableChild</div>
      <div
        contentEditable="true"
        onInput={handleChange}
        onBlur={handleChange}
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: lastContentRef.current }}
        suppressContentEditableWarning={true}
      ></div>
    </>
  )
}
export default EditableChild
