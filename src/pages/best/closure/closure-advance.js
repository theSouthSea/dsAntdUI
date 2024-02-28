const cache = {}

const something = (value) => {
  if (!cache.current) {
    cache.current = () => {
      console.log(value)
    }
  }

  return cache.current
}
const first = something("first")
const second = something("second")
first()
second()
// first
// first
