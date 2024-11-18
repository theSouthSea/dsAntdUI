import { ChangeEvent, useEffect, useRef } from "react"

interface EditableChildProps {
  content: string
  onChange: (val: string) => void
}

const EditableChild = (props: EditableChildProps) => {
  const { content, onChange } = props
  const contentRef = useRef<HTMLDivElement>(null)
  const lastContentRef = useRef<string>(content)

  useEffect(() => {
    if (contentRef.current && contentRef.current.innerHTML !== content) {
      contentRef.current.innerHTML = content
      // 移动光标到文本结尾
      const range = document.createRange()
      const selection = window.getSelection()
      if (selection) {
        range.setStart(contentRef.current.lastChild!, contentRef.current.lastChild?.length)
        range.collapse(true)
        selection.removeAllRanges()
        selection.addRange(range)
      }
    }
  }, [content])

  const handleChange = (e: ChangeEvent<HTMLDivElement>) => {
    const currentValue = contentRef.current?.innerHTML || ""
    if (currentValue !== lastContentRef.current) {
      onChange(currentValue)
    }
    lastContentRef.current = currentValue
  }

  return (
    <>
      <div>UseRange</div>
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
