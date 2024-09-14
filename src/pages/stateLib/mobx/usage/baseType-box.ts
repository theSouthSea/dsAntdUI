import { observable } from "mobx"

const num = observable.box(99)
const str = observable.box("leo")
const bool = observable.box(true)

// 获取原始值  get()
console.log(num.get(), str.get(), bool.get()) // 99 "leo" true

// 修改原始值  set(params)
num.set(100)
str.set("pingan")
bool.set(false)
console.log(num.get(), str.get(), bool.get()) // 100 "pingan" false
