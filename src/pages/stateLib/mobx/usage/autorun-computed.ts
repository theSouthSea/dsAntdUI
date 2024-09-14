import { autorun, computed, observable } from "mobx"

class Store {
  @observable accessor str = "leo"
  @observable accessor num = 123

  @computed get all() {
    return `${store.str}--${store.num}`
  }
}

const store = new Store()
autorun(() => {
  console.log(store.all)
})
store.str = "pingan"

// leo--123
// pingan--123
