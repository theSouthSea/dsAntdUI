import { observable } from "mobx"

class Leo {
  @observable accessor arr = [1]
  @observable accessor obj = {}
  @observable accessor map = new Map()
  @observable accessor str = "leo"
  @observable accessor num = 100
  @observable accessor bool = false
}
const leo = new Leo()
console.log(leo.arr[0]) // 1
