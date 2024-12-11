import { makeAutoObservable } from "mobx"

import { getTodos, getTodosBySearch } from "@/services/todos"

export interface ITodo {
  id?: number
  title?: string
  description?: string
  dueDate?: string
  completed?: boolean
}
export class TodosStore {
  todos: ITodo[] = []
  searchedTodos: ITodo[] = []
  searchText = ""
  fetchTodos = async () => {
    const res = await getTodos()
    this.todos = res.data
  }
  fetchSearchedTodos = async (search) => {
    const res = await getTodosBySearch({ search })
    this.searchedTodos = res.data
  }
  addTodo = (value: string) => {
    this.todos.push({
      id: this.todos.length + 1,
      title: value,
      description: "test",
      dueDate: "2021-01-01",
      completed: false,
    })
  }
  // get searchTodos() {
  //   return this.todos.filter((todo) => {
  //     return todo.title.toLowerCase().includes(this.searchText.toLowerCase())
  //   })
  // }
  constructor() {
    makeAutoObservable(this)
  }
}
export default new TodosStore()
