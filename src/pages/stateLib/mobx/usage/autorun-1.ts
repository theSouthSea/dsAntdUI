import { autorun, observable } from "mobx"

class Store {
  @observable accessor str = "leo"
  @observable accessor num = 123
}

const store = new Store()
autorun(() => {
  console.log(`${store.str}--${store.num}`)
})
// leo--123
store.str = "pingan"
