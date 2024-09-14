import { computed, observable } from "mobx"

class Money {
  @observable accessor price = 0
  @observable accessor amount = 2

  constructor(price = 1) {
    this.price = price
  }

  @computed get total() {
    return this.price * this.amount
  }

  set total(n) {
    this.price = n + 1
  }
}

const m = new Money()

console.log(m.total) // 2
m.price = 10
console.log(m.total) // 20
m.total = 6
console.log(m.total) // 14
