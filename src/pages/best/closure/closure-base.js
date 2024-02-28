/* 最初 */
// const something = () => {
//   const value = 'aa'
//   const inside = () => {
//     console.log(value)
//   }

//   return inside
// }
/* 进阶 */
const something = (value) => {
  const inside = () => {
    console.log(value)
  }

  return inside
}
const first = something("first")
const second = something("second")
first()
second()
// first
// second
