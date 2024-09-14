import { autorun, makeAutoObservable, reaction, runInAction, when } from "mobx"
// 直接使用makeAutoObservable
const store = makeAutoObservable({
  count: 1,
  get double() {
    return this.count * 2
  },
  increment() {
    this.count += 1
  },
  decrement() {
    this.count -= 1
  },
  // 在 MobX 中，不管是同步还是异步操作，都可以放到 action 中，
  // 只是异步操作在修改属性时，需要将赋值操作放到 runInAction 中。
  async asyncDecreament() {
    // 模拟ajax获取数据
    const count = await new Promise((resolve) => {
      setTimeout(() => resolve(1), 50)
    })
    // 获取数据后，将赋值操作放到 runInAction 中
    runInAction(() => {
      this.count -= count
    })
  },
})
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
