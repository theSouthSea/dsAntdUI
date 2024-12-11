import { Input, Radio } from "antd"
import { observer } from "mobx-react-lite"
import { KeyboardEvent, useCallback, useMemo } from "react"

import styles from "./index.module.less"
import TodoStore, { Visibility } from "./store"
import TodoItem from "./TodoItemOptMemo"

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
  // 这个函数出现了修改后不更新的问题
  const handleToggleComplete = useCallback((todo) => {
    TodoStore.toggleComplete(todo)
  }, [])
  const handleEditingToggle = useCallback((todo) => {
    TodoStore.editingTodo = todo
  }, [])
  const handleRemoveTodo = useCallback((todo) => {
    TodoStore.removeTodo(todo)
  }, [])
  const handleUpdateTodo = useCallback((index, value, isCancel) => {
    TodoStore.editingTodo = null as any
    if (!isCancel) {
      TodoStore.updateTodo(index, value)
    }
  }, [])
  const todosJsx = useMemo(() => {
    return (
      <ul>
        {TodoStore.filteredTodos.map((todo, index) => (
          <TodoItem
            todo={todo}
            index={index}
            key={todo.id}
            onToggleComplete={handleToggleComplete}
            editingTodo={TodoStore.editingTodo}
            onEditingStateChange={handleEditingToggle}
            onRemoveTodo={handleRemoveTodo}
            onUpdateTodo={handleUpdateTodo}
          ></TodoItem>
        ))}
      </ul>
    )
  }, [TodoStore.filteredTodos, TodoStore.editingTodo])
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
      {todosJsx}
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
