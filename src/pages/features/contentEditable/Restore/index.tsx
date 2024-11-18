import { useState } from "react"

import ControlledEditableComp from "./ControlledEditableComp"
import EditableChild from "./EditableChild"
import UseRange from "./UseRange"
import UseRefGetEditableValue from "./UseRefGetEditableValue"

const EditableRestore = () => {
  const [title, setTitle] = useState("好好学习,天天向上")
  const handleChange = (e: any) => {
    console.log("handleChange-textContent", e.target.textContent)
    setTitle(e.target.textContent)
  }
  const handleInput = (e) => {
    console.log("Text inside div", e.currentTarget.textContent)
    setTitle(e.currentTarget.textContent)
  }
  const handleContentChange = (val: string) => {
    console.log("val=", val, typeof val)
    setTitle(val)
  }
  return (
    <>
      <div>EditableRestore-contentEditable恢复之前的状态</div>
      <div contentEditable="true" onChange={handleChange} onInput={handleInput}>
        {title}
      </div>
      <section>
        <h2>非受控组件</h2>
        <EditableChild content={title}></EditableChild>
      </section>
      <section>
        <h2>受控组件</h2>
        <ControlledEditableComp
          content={title}
          onChange={handleContentChange}
        ></ControlledEditableComp>
      </section>
      {/* <section>
        <h2>UseRange</h2>
        <UseRange content={title} onChange={handleContentChange}></UseRange>
      </section> */}
      <section>
        <h2>Ref获取可编辑元素的值</h2>
        <UseRefGetEditableValue
          defaultValue={title}
          onChange={handleChange}
        ></UseRefGetEditableValue>
      </section>
    </>
  )
}
export default EditableRestore
