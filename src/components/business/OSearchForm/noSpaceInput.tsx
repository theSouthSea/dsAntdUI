import { Input } from '@ui'
import React from 'react'

const { TextArea } = Input

export const createNoSpace = (WrapperInput: any) => {
  return function NoSpace({ ...props }: any) {
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
      e.target.value = e.target.value.trim()
      if (typeof props.onChange === 'function') {
        props.onChange(e.target.value)
      }
    }
    return <WrapperInput {...props} onBlur={handleBlur} />
  }
}

// 清除前后空格的Input
export const ONoSpaceInput = createNoSpace(Input)
// 清除前后空格的TextArea
export const ONoSpaceTextArea = createNoSpace(TextArea)
