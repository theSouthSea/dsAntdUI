import { useState } from "react"

import styles from "./index.module.less"

const EditableComp = () => {
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const handleEditableToggle = () => {
    setIsEditable(!isEditable)
  }
  return (
    <div className={styles.container}>
      <div contentEditable={isEditable}>EditableComp</div>
      <div contentEditable>EditableComp contentEditable</div>
      <div>EditableComp no contentEditable</div>
      <button onClick={handleEditableToggle}>元素可编辑状态切换</button>
    </div>
  )
}
export default EditableComp
