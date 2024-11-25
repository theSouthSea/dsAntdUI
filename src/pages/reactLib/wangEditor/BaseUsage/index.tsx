import React, { useEffect, useState } from "react"

import Editor from "./Editor"

export default function BaseUsage() {
  const [html, setHtml] = useState("<p>hello</p>")

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml("<p>hello world</p>")
    }, 1500)
  }, [])
  return (
    <div>
      <h1>富文件编辑器</h1>
      <Editor html={html} setHtml={setHtml}></Editor>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}
