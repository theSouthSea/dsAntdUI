import { action, autorun, computed, makeObservable, observable, reaction, when } from "mobx"
// 创建store
const store = makeObservable(
  {
    count: 1,
    get double() {
      return this.count * 2
    },
    // 定义action
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    },
  },
  {
    count: observable, //需要响应的属性
    double: computed, //计算属性
    increment: action, //action
    decrement: action,
  },
)
class MobxDemo {
  handleRefresh() {
    this.container.innerHTML = `
      count: ${store.count}
      double count: ${store.double}
    `
  }
  init() {
    this.handleRefresh()
    this.increaseBtn.addEventListener("click", () => {
      store.increment()
    })
    this.decreaseBtn.addEventListener("click", () => {
      store.decrement()
    })
    // autorun类似于react hooks中的useEffect
    // 当observable响应属性被更新时，autorun立即被调用一次
    autorun(() => {
      this.handleRefresh()
    })
    // 类似Vue中的watch观察
    reaction(
      () => store.count, // 指定观察count属性
      (currentVal, oldVal) => {
        console.log(`current: ${currentVal}, old: ${oldVal}`)
      },
    )
    // 条件响应
    when(
      () => store.count < 0,
      () => {
        console.log("...")
      },
    )
  }
}
const mobxDemo = new MobxDemo()
mobxDemo.init()
