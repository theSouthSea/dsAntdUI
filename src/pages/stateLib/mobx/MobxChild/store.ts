import { action, computed, observable } from "mobx"

export type ITodo = {
  id: number
  text: string
  completed: boolean
}
export type Visibility = "all" | "completed" | "active"
export class TodoStore {
  @observable accessor todos: ITodo[] = []
  @observable accessor newText: string = ""
  // @observable accessor filteredTodos: ITodo[] = []
  @observable accessor visibility: Visibility = "all"
  @observable accessor editingTodo: ITodo = null as any
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
  updateTodoById(id, val) {
    /* 响应式修改数据方法 */
    // const index = this.todos.findIndex((item) => item.id === id)
    // const curItem = this.todos[index]
    /* 响应式数据最简单的修改办法 */
    // const curItem = this.todos.find((item) => item.id === id)
    // if (curItem) {
    //   curItem.text = val
    //   /* 失去响应性 */
    //   // curItem = {
    //   //   ...curItem,
    //   //   text: val,
    //   // }
    // }
    /* 批量修改多个属性的正确方法 */
    const index = this.todos.findIndex((item) => item.id === id)
    this.todos[index] = {
      ...this.todos[index],
      text: val,
    }
    /* react数据不可变性修改数据方法 */
    /* 第一种 */
    // const newTodos = this.todos.map((item) => {
    //   if (item.id === id) {
    //     item.text = val
    //   }
    //   return item
    // })
    // this.todos = newTodos
    /* 第二种 */
    // const newTodos = [...this.todos]
    // const curItem = newTodos.find((item) => item.id === id)
    // if (curItem) {
    //   curItem.text = val
    // }
    // this.todos = newTodos
    /* 第三种 */
    // const newTodos = [...this.todos]
    // const curIndex = newTodos.findIndex((item) => item.id === id)
    // if (curIndex !== -1) {
    //   // const curItem = newTodos[curIndex]
    //   // curItem.text = val
    //   newTodos[curIndex] = {
    //     ...newTodos[curIndex],
    //     text: val,
    //   }
    // }
    // this.todos = newTodos
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
