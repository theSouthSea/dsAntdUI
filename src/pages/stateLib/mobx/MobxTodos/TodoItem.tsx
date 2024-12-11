import { Button, Checkbox, Input } from "antd"
import { observer } from "mobx-react-lite"
import { KeyboardEvent } from "react"

import styles from "./index.module.less"

const TodoItem = (prorps) => {
  const { todo, index, store } = prorps
  console.log("TodoItem-todo, index=", todo, index)
  return (
    <li>
      <div
        className={styles.view}
        style={{ display: store.editingTodo === todo ? "none" : "flex" }}
      >
        <Checkbox onChange={() => store.toggleComplete(todo)} checked={todo.completed}></Checkbox>
        <div
          className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
          onDoubleClick={() => (store.editingTodo = todo)}
        >
          {todo.text}
        </div>
        <Button type="link" onClick={() => store.removeTodo(todo)}>
          Remove
        </Button>
      </div>
      {store.editingTodo === todo && (
        <Input
          type="text"
          defaultValue={todo.text}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              store.updateTodo(index, e.target.value)
              store.editingTodo = null as any
              e.target.value = ""
              return
            }
            if (e.key === "Escape") {
              store.editingTodo = null as any
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
