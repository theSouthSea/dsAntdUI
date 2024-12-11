import { autorun, computed, makeObservable, observable } from "mobx"

class OrderLine {
  price = 0
  amount = 1

  constructor(price: number) {
    makeObservable(this, {
      price: observable,
      amount: observable,
      // try one to see the effects:
      total: computed,
      // total: false,
      // total: computed({ keepAlive: true })
    })
    this.price = price
  }

  get total() {
    log("computing...")
    return this.price * this.amount
  }
}

const order = new OrderLine(0)

const stop = autorun(() => {
  log(order.total)
})
// computing...
// total: 0

log(order.total)
// (no re-computing)
// 0

order.amount = 5
// computing...
// (nothing)

order.price = 2
// computing...
// total: 10

stop()

order.price = 3
// (neither the computation or autorun will recomputed)

// the computed value is suspended, so won't cache anymore
// to prevent mem leaks
log(order.total)
log(order.total)

function log(msg: any) {
  console.log(msg)
  document.body.innerHTML += "<br/>" + msg
}
