import { observer } from "mobx-react-lite"
import { KeyboardEvent } from "react"

import styles from "./index.module.less"
import TodoStore, { Visibility } from "./store"

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
        <label>
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
        </label>
      </div>
      <ul>
        {TodoStore.filteredTodos.map((todo, index) => (
          <li key={index}>
            <div
              className={styles.view}
              style={{ display: TodoStore.editingTodo === todo ? "none" : "flex" }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => TodoStore.toggleComplete(todo)}
              />
              <div
                className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
                onDoubleClick={() => (TodoStore.editingTodo = todo)}
              >
                {todo.text}
              </div>
              <button onClick={() => TodoStore.removeTodo(todo)}>Remove</button>
            </div>
            {TodoStore.editingTodo === todo && (
              <input
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
      <input
        type="text"
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            TodoStore.addTodo(e.target.value)
            e.target.value = ""
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
