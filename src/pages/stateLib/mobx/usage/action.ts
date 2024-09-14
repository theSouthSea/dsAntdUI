import { action, computed, observable, reaction } from "mobx"

class Store {
  @observable accessor string = "leo"
  @observable accessor number = 123
  @action bar() {
    this.string = "pingan"
    this.number = 100
  }
}
const store = new Store()
reaction(
  () => [store.string, store.number],
  (arr) => {
    console.log(arr)
  },
)
store.bar() // ["pingan", 100]
