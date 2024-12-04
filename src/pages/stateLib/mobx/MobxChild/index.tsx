import { Button, Checkbox, Input, Radio } from "antd"
import { observer } from "mobx-react-lite"
import { KeyboardEvent, MouseEvent } from "react"

import styles from "./index.module.less"
import TodoStore, { Visibility } from "./store"
import Todo from "./Todo"

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
      <div className={styles.listContainer}>
        {TodoStore.filteredTodos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            isEdit={todo === TodoStore.editingTodo}
            store={TodoStore}
          ></Todo>
        ))}
      </div>
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
      {TodoStore.todos[0] && (
        <section>
          <h2>修改第一项</h2>
          <Input
            defaultValue={TodoStore.todos[0].text}
            onPressEnter={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.target.value) {
                TodoStore.updateTodoById(TodoStore.todos[0].id, e.target.value)
                e.target.value = ""
              }
            }}
          />
        </section>
      )}
    </div>
  )
}
export default observer(MobxTodos)