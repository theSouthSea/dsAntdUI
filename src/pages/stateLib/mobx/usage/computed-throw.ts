import { computed, observable } from "mobx"

const x = observable.box(10)
const y = observable.box(2)
const div = computed(() => {
  if (y.get() === 0) throw new Error("y 为0了")
  return x.get() / y.get()
})

div.get() // 5
y.set(0) // ok
div.get() // 报错，y 为0了

y.set(5)
div.get() // 恢复正常，返回 2
