import { action, observable, reaction, runInAction } from "mobx"

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
runInAction(() => {
  store.string = "fuqiang"
  store.number = 200
}) //["pingan", 100]
