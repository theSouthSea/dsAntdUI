import { Button, Checkbox, Input, Radio } from "antd"
import { observer } from "mobx-react-lite"
import { KeyboardEvent, MouseEvent } from "react"

import styles from "./index.module.less"
import TodoStore, { Visibility } from "./store"

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
        {/* <label>
          <input
            type="radio"
            name="completeStatus"
            value="all"
            defaultChecked={true}
            // defaultChecked={TodoStore.filterStatus === "all"}
            onChange={(e) => (TodoStore.visibility = e.target.value as Visibility)}
          ></input>
          Toggle All
        </label>
        <label>
          <input
            type="radio"
            name="completeStatus"
            value="completed"
            onChange={(e) => (TodoStore.visibility = e.target.value as Visibility)}
            // onChange={(e) => TodoStore.filterTodos(e.target.value)}
          ></input>
          Completed
        </label>
        <label>
          <input
            type="radio"
            name="completeStatus"
            value="active"
            onChange={(e) => (TodoStore.visibility = e.target.value as Visibility)}
          ></input>
          Active
        </label> */}
      </div>
      <ul>
        {TodoStore.filteredTodos.map((todo, index) => (
          <li key={index}>
            <div
              className={styles.view}
              style={{ display: TodoStore.editingTodo === todo ? "none" : "flex" }}
            >
              {/* <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => TodoStore.toggleComplete(todo)}
              /> */}
              <Checkbox
                onChange={() => TodoStore.toggleComplete(todo)}
                checked={todo.completed}
              ></Checkbox>
              <div
                className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
                onDoubleClick={() => (TodoStore.editingTodo = todo)}
              >
                {todo.text}
              </div>
              <Button type="link" onClick={() => TodoStore.removeTodo(todo)}>
                Remove
              </Button>
            </div>
            {TodoStore.editingTodo === todo && (
              <Input
                type="text"
                defaultValue={todo.text}
                // value={todo.text}
                // onChange={(e) => TodoStore.updateTodo(index, {
                //   ...todo,
                //   text: e.target.value,
                // })}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === "Enter") {
                    TodoStore.updateTodo(index, e.target.value)
                    TodoStore.editingTodo = null as any
                    e.target.value = ""
                    return
                  }
                  if (e.key === "Escape") {
                    TodoStore.editingTodo = null as any
                    e.target.value = ""
                    return
                  }
                }}
              />
            )}
          </li>
        ))}
      </ul>
      <Input
        // type="text"
        // onKeyDown={(e: MouseEvent<HTMLInputElement>) => {
        //   if (e.key === "Enter") {
        //     TodoStore.addTodo(e.target.value)
        //     e.target.value = ""
        //   }
        // }}
        // defaultValue=""
        value={TodoStore.newText}
        onChange={(e) => (TodoStore.newText = e.target.value)}
        onPressEnter={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.target.value) {
            TodoStore.addTodo(e.target.value)
            TodoStore.newText = ""
          }
        }}
        // onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
        //   if (e.key === "Enter") {
        //     TodoStore.addTodo(e.target.value)
        //     e.target.value = ""
        //   }
        // }}
      />
    </div>
  )
}
export default observer(MobxTodos)
