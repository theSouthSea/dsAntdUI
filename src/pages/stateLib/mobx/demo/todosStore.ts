import { makeAutoObservable } from "mobx"

import { getTodos, getTodosBySearch } from "@/services/todos"

export class TodosStore {
  todos = []
  searchedTodos = []
  searchText = ""
  fetchTodos = async () => {
    const res = await getTodos()
    this.todos = res.data
  }
  fetchSearchedTodos = async (search) => {
    const res = await getTodosBySearch({ search })
    this.searchedTodos = res.data
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
