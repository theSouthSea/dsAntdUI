import { observable, reaction } from "mobx"

class Leo {
  @observable accessor str = "leo"
  @observable accessor num = 123
  @observable accessor bool = false
}

const leo = new Leo()
reaction(
  () => [leo.str, leo.num],
  (arr) => {
    console.log(arr)
  },
)
leo.str = "pingan"
leo.num = 122
// ["pingan", 122]
// ["pingan", 122]
