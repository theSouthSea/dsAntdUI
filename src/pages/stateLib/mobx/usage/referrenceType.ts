import { observable } from "mobx"

const list = observable([1, 2, 4])
list[2] = 3
list.push(5) // 可以调用数组方法
console.log(list[0], list[1], list[2], list[3]) // 1 2 3 5

const obj = observable({ a: "11", b: "22" })
console.log(obj.a, obj.b) // 11 22
obj.a = "leo"
console.log(obj.a, obj.b) // leo 22
