import React, { useRef } from 'react'
import TinyBaseConf from './tinyBaseConf'

interface TinyControlledProps {
  value?: string
  onChange?: (value: string) => void
  initialValue?: string
  limit?: number
  disabled?: boolean
}
export const TinyControlled: React.FC<TinyControlledProps> =
  function MyComponent({
    initialValue,
    limit,
    value,
    onChange,
    disabled = false,
  }) {
    const initialValueRef = useRef(initialValue || value)

    const sizeLimit = limit ?? 500
    const [dataLength, setLength] = React.useState(0)

    const handleUpdate = (val: any, editor: any) => {
      const { length } = editor.getContent({ format: 'text' })
      if (limit) {
        if (length <= sizeLimit) {
          if (onChange) {
            onChange(val)
          }
          setLength(length)
        }
      } else if (onChange) {
        onChange(val)
      }
    }

    if (limit) {
      const handleBeforeAddUndo = (evt: any, editor: any) => {
        const { length } = editor.getContent({ format: 'text' })
        // note that this is the opposite test as in handleUpdate
        // because we are determining when to deny adding an undo level
        if (length > sizeLimit) {
          evt.preventDefault()
        }
      }
      const handleInit = (_evt: any, editor: any) => {
        setLength(editor.getContent({ format: 'text' }).length)
      }

      return (
        <>
          <TinyBaseConf
            disabled={disabled}
            initialValue={initialValueRef.current}
            value={value}
            onInit={handleInit}
            onEditorChange={handleUpdate}
            onBeforeAddUndo={handleBeforeAddUndo}
          />
          <p>Remaining: {sizeLimit - dataLength}</p>
        </>
      )
    }
    return (
      <TinyBaseConf
        disabled={disabled}
        initialValue={initialValueRef.current}
        value={value}
        onEditorChange={handleUpdate}
      />
    )
  }
