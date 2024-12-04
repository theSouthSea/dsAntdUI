import { observable } from "mobx"

class Store {
  @observable accessor examContent: "" = ""
}
export default new Store()
