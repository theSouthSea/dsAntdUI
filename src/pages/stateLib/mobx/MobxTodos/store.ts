import { action, computed, observable } from "mobx"

export type Todo = {
  id: number
  text: string
  completed: boolean
}
export type Visibility = "all" | "completed" | "active"
class TodoStore {
  @observable accessor todos: Todo[] = []
  @observable accessor newText: string = ""
  // @observable accessor filteredTodos: Todo[] = []
  @observable accessor visibility: Visibility = "all"
  @observable accessor editingTodo: Todo = null as any
  @action
  addTodo(todo) {
    this.todos.push({
      // id: this.todos.length + 1,
      id: new Date().getTime(),
      text: todo,
      completed: false,
    })
  }

  @action
  removeTodo(todo) {
    this.todos = this.todos.filter((item) => item !== todo)
  }

  // @action
  // updateTodo(index, newTodo) {
  //   this.todos[index] = newTodo;
  // }
  @action
  updateTodo(index, val) {
    this.todos[index].text = val
  }

  @action
  toggleComplete(todo) {
    todo.completed = !todo.completed
  }

  @action
  filterTodos(filter) {
    switch (filter) {
      case "all":
        return this.todos
      case "active":
        return this.todos.filter((todo) => !todo.completed)
      case "completed":
        return this.todos.filter((todo) => todo.completed)
      default:
        return this.todos
    }
  }
  @action
  removeCompletedTodos() {
    this.todos = this.todos.filter((todo) => !todo.completed)
  }
  @computed
  get filteredTodos() {
    if (this.visibility === "all") {
      return this.todos
    } else if (this.visibility === "completed") {
      return this.todos.filter((todo) => todo.completed)
    } else {
      return this.todos.filter((todo) => !todo.completed)
    }
  }
}

export default new TodoStore()
