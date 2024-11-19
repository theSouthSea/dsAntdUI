import { Button, Checkbox, Input, Radio } from "antd"
import { KeyboardEvent } from "react"

import styles from "./index.module.less"
import { ITodo, TodoStore } from "./store"

interface TodoProps {
  todo: ITodo
  index: number
  isEdit: boolean
  store: TodoStore
}
const Todo = (props: TodoProps) => {
  const { todo, index, isEdit, store } = props
  return (
    <>
      <div className={styles.view} style={{ display: isEdit ? "none" : "flex" }}>
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
          // value={todo.text}
          // onChange={(e) => store.updateTodo(index, {
          //   ...todo,
          //   text: e.target.value,
          // })}
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
    </>
  )
}
export default Todo
