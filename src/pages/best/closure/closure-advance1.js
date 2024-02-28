const cache = {}
let prevValue

const something = (value) => {
  // check whether the value has changed
  if (!cache.current || value !== prevValue) {
    cache.current = () => {
      console.log(value)
    }
  }

  // refresh it
  prevValue = value
  return cache.current
}
// const first = something("first")
// const second = something("second")
// first()
// second()
// first
// second
const first = something("first")
const anotherFirst = something("first")
const second = something("second")

first() // logs "first"
second() // logs "second"
console.log(first === anotherFirst) // will be true
