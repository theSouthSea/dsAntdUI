import { action, observable } from "mobx"

import { Cache, Foo } from "./components/Foo"

class Store {
  @observable cache: Cache = { queue: [] }
  @action.bound refresh() {
    this.cache.queue.push(1)
  }
}
const store = new Store()
const MobxDemo = () => {
  return <Foo cache={store.cache} refresh={store.refresh} />
}
export default MobxDemo
