import { useEffect, useRef } from "react"

function EditableDiv() {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const div = divRef.current!
    const selection = window.getSelection() as Selection

    if (div && div.contains(selection.anchorNode)) {
      const range = document.createRange()
      range.setStart(selection.anchorNode as Node, selection.anchorOffset)
      range.setEnd(selection.focusNode as Node, selection.focusOffset)
      const restoredSelection = window.getSelection()
      restoredSelection?.removeAllRanges()
      restoredSelection?.addRange(range)
    }
  }, [])

  return (
    <div ref={divRef} contentEditable="true">
      Editable Content
    </div>
  )
}

export default EditableDiv
