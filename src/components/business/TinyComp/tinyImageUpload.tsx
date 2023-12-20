/* eslint-disable no-return-assign */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */
import React, { useImperativeHandle, useRef, forwardRef } from 'react'
import TinyBaseConf from './tinyBaseConf'

export interface TinyImageUpload {
  value: string
  onBlur?: (event: any, editor: any) => void
}
export interface richTextRef {
  getTinyContent: () => string
  setTinyContent: (value: string) => void
}
// 外面点击提交,获取编辑器中的内容

function TinyImageUpload(
  { value, onBlur }: TinyImageUpload,
  ref: React.Ref<richTextRef>
) {
  const editorRef: any = useRef(null)
  const onBlurRef = useRef<any>(onBlur)
  if (!onBlurRef.current) {
    onBlurRef.current = () => {}
  }
  useImperativeHandle(ref, () => ({
    // 获取并返回富文本编辑器的内容
    getTinyContent: () => {
      if (editorRef.current) {
        return editorRef.current.getContent() || ''
      }
      return ''
    },
    setTinyContent: (val: any) => {
      if (editorRef.current) {
        editorRef.current.setContent(val)
      }
    },
  }))

  return (
    <TinyBaseConf
      onInit={(_evt, editor) => (editorRef.current = editor)}
      initialValue={value}
      onBlur={onBlurRef.current}
    />
  )
}
const TinyImageUploadRef = forwardRef(TinyImageUpload)
export { TinyImageUploadRef }
