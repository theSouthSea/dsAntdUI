import { action, makeAutoObservable, observable } from "mobx"

class Store {
  constructor() {
    makeAutoObservable(this)
  }
  name: string = ""
  inputTodo: string = ""
  loading: boolean = false
  age: number = 0
  address: string = ""
  // 口号，口头禅
  slogan: string = "好好学习，天天向上"
  // mantra:string[]=[]
  // 爱好
  hobby: string[] = []
  todos: string[] = []
  // accessor hobby: string[] = []
  // accessor todos: string[] = []
  // 运动
  sports: string[] = ["羽毛球", "篮球", "足球", "滑雪", "游泳", "跑步", "爬山", "骑行"]
  removeItem(index: number) {
    this.sports.splice(index, 1)
  }
  addItem() {
    this.todos.push(this.inputTodo)
  }
  removeTodo(index: number) {
    this.todos.splice(index, 1)
  }
  removeHobby(index: number) {
    this.hobby.splice(index, 1)
  }
}
export default new Store()
