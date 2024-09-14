import { observable } from "mobx"

const map = observable.map({ key: "value" })
map.set("key", "new value")
console.log(map.has("key")) // true
map.delete("key")
console.log(map.has("key")) // false
