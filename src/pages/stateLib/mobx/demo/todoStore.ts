import { makeAutoObservable } from "mobx"

export class Todo {
  title = "test"
  done = true

  constructor() {
    makeAutoObservable(this)
  }
}
export default new Todo()
