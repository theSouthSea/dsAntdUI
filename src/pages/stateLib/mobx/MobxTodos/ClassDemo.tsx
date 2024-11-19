import { observer } from "mobx-react"
import React, { Component } from "react"

import TodoStore from "./store"

@observer
class TodoList extends Component {
  render() {
    const { todos } = TodoStore

    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => TodoStore.removeTodo(todo)}>Remove</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              TodoStore.addTodo(e.target.value)
              e.target.value = ""
            }
          }}
        />
      </div>
    )
  }
}

export default TodoList
