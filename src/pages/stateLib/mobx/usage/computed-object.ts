import { observable } from "mobx"

const Money = observable.object({
  price: 0,
  amount: 1,
  get total() {
    return this.price * this.amount
  },
})

console.log(Money.total) // 0
Money.price = 10
console.log(Money.total) // 10
