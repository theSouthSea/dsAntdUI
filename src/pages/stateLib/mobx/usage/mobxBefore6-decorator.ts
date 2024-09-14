import { action, computed, makeObservable, observable } from "mobx"

class Store {
  @observable count = 0
  constructor() {
    makeObservable(this)
  }
  @computed get double() {
    return this.count * 2
  }
  @action increment() {
    this.count++
  }
  @action decrement() {
    this.count--
  }
}
const store = new Store()
