import { Input, Radio } from "antd"
import { observer } from "mobx-react-lite"
import { KeyboardEvent } from "react"

import styles from "./index.module.less"
import TodoStore, { Visibility } from "./store"
import TodoItem from "./TodoItem"

const options = [
  {
    label: <span>All</span>,
    value: "all",
  },
  {
    label: <span>Completed</span>,
    value: "completed",
  },
  {
    label: <span>Active</span>,
    value: "active",
  },
]
const MobxTodos = () => {
  const todos = TodoStore.todos
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <button onClick={() => TodoStore.removeCompletedTodos()}>Remove Completed</button>
      </div>
      <div>
        <span>
          {todos.filter((todo) => todo.completed).length}/{todos.length}
        </span>
      </div>
      <div className={styles.actionButtons}>
        <Radio.Group
          block
          options={options}
          defaultValue="all"
          optionType="button"
          buttonStyle="solid"
          onChange={(e) => (TodoStore.visibility = e.target.value as Visibility)}
        />
      </div>
      <ul>
        {TodoStore.filteredTodos.map((todo, index) => (
          <TodoItem todo={todo} store={TodoStore} index={index} key={todo.id}></TodoItem>
        ))}
      </ul>
      <Input
        value={TodoStore.newText}
        onChange={(e) => (TodoStore.newText = e.target.value)}
        onPressEnter={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.target.value) {
            TodoStore.addTodo(e.target.value)
            TodoStore.newText = ""
          }
        }}
      />
    </div>
  )
}
export default observer(MobxTodos)
