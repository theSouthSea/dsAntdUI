import { Button, Checkbox, Input } from "antd"
import { observer } from "mobx-react-lite"
import { KeyboardEvent } from "react"

import styles from "./index.module.less"

const TodoItem = (prorps) => {
  const {
    todo,
    index,
    onToggleComplete,
    editingId,
    onEditingStateChange,
    onRemoveTodo,
    onUpdateTodo,
  } = prorps
  console.log("TodoItem-todo, index=", todo, index)
  return (
    <li>
      <div className={styles.view} style={{ display: editingId === todo.id ? "none" : "flex" }}>
        <Checkbox onChange={() => onToggleComplete(todo)} checked={todo.completed}></Checkbox>
        <div
          className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
          onDoubleClick={() => onEditingStateChange(todo)}
        >
          {todo.text}
        </div>
        <Button type="link" onClick={() => onRemoveTodo(todo)}>
          Remove
        </Button>
      </div>
      {editingId === todo.id && (
        <Input
          type="text"
          defaultValue={todo.text}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onUpdateTodo(index, e.target.value)
              // store.editingTodo = null as any
              e.target.value = ""
              return
            }
            if (e.key === "Escape") {
              onUpdateTodo(index, e.target.value)
              // store.editingTodo = null as any
              e.target.value = ""
              return
            }
          }}
        />
      )}
    </li>
  )
}
export default observer(TodoItem)
