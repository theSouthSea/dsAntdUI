import { action, computed, observable, reaction } from "mobx"

class Store {
  @observable accessor string = "leo"
  @observable accessor number = 123
  @action.bound bar() {
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
const bar = store.bar
function foo(fun) {
  fun()
}
foo(bar)
// ["pingan", 100]
