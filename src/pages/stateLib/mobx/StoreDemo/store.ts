// import { action, makeAutoObservable, observable } from "mobx"
import { action, observable } from "mobx"

class Store {
  // constructor() {
  //   makeAutoObservable(this)
  // }
  @observable accessor name: string = ""
  @observable accessor inputTodo: string = ""
  @observable accessor loading: boolean = false
  @observable accessor age: number = 0
  @observable accessor address: string = ""
  // 口号，口头禅
  @observable accessor slogan: string = "好好学习，天天向上"
  // @observable mantra: string[] = []
  // 爱好
  // @observable hobby: string[] = []
  // @observable todos: string[] = []
  @observable accessor hobby: string[] = []
  @observable accessor todos: string[] = []
  // 运动
  @observable accessor sports: string[] = [
    "羽毛球",
    "篮球",
    "足球",
    "滑雪",
    "游泳",
    "跑步",
    "爬山",
    "骑行",
  ]
  @action
  removeItem(index: number) {
    this.sports.splice(index, 1)
  }
  @action
  addItem() {
    this.todos.push(this.inputTodo)
  }
  @action
  removeTodo(index: number) {
    this.todos.splice(index, 1)
  }
  @action
  removeHobby(index: number) {
    this.hobby.splice(index, 1)
  }
}
// const store = new Store();
// function getStore(): Store {
//   return store
// }
// const store1 = getStore()
// store1.address
export default new Store()
