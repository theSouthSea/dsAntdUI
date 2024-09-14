import { computed, observable } from "mobx"

const leo = observable.box("hello")
const upperCaseName = computed(() => {
  const newValue = leo.get().toUpperCase()
  console.log("newValue=", newValue)
  return newValue
})
console.log("upperCaseName-old=", upperCaseName.get())
// newValue= HELLO
// upperCaseName= HELLO
/* 不调用upperCaseName.get(),computed的回调函数不会执行 */
// const disposer = upperCaseName.observe((change) => console.log(change.newValue))
leo.set("pingan")
console.log("upperCaseName-new=", upperCaseName.get())
// newValue= HELLO
// upperCaseName-old= HELLO
// newValue= PINGAN
// upperCaseName-new= PINGAN
