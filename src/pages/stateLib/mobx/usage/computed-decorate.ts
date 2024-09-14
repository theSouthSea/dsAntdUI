// import { computed, decorate, observable } from "mobx"

class Money {
  price = 0
  amount = 2
  constructor(price = 1) {
    this.price = price
  }

  get total() {
    return this.price * this.amount
  }
}
// decorate(Money, {
//   price: observable,
//   amount: observable,
//   total: computed,
// })

const m = new Money()

console.log(m.total) // 2
m.price = 10
console.log(m.total) // 20
