import { observable, when } from "mobx"

class Leo {
  @observable accessor str = "leo"
  @observable accessor num = 123
  @observable accessor bool = false
}

const leo = new Leo()
when(
  () => leo.bool,
  () => {
    console.log("这是true")
  },
)
leo.bool = true
// 这是true
