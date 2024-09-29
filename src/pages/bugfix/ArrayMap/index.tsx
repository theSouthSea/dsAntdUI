const emptyArr: any[] = []
/* 服务器会返回null,导致bug */
const resEmpty = null
/* 服务器还会返回[null],导致bug */
const resArrNull = [null]
const normalArr = [1, 2, 3]
const objArr = [
  {
    id: 1,
    name: "张三",
  },
  {
    id: 2,
    name: "李四",
  },
  {
    id: 3,
    name: "王五",
  },
]

const ArrayMap = () => {
  return (
    <>
      <h2>ArrayMap</h2>
      <p>jsx怎么处理空数组的?</p>
      {emptyArr}
      <section>
        <h3>map遍历空数组</h3>
        {emptyArr.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
      </section>
      <section>
        <h3>map遍历空数组-emptyArr.length && emptyArr.map</h3>
        {emptyArr.length &&
          emptyArr.map((item, index) => {
            return <div key={index}>{item}</div>
          })}
      </section>
      <section>
        <h3>map遍历空数组-emptyArr.length && emptyArr.map</h3>
        {emptyArr.length > 0 &&
          emptyArr.map((item, index) => {
            return <div key={index}>{item}</div>
          })}
      </section>
      <section>
        <h3>map遍历null</h3>
        {resEmpty?.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
      </section>
      <section>
        <h3>map遍历[null]</h3>
        {resArrNull?.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
      </section>
      <section>
        <h3>map遍历常规数组[1, 2, 3]</h3>
        {normalArr?.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
      </section>
      <section>
        <h3>map遍历对象数组</h3>
        {objArr?.map((item, index) => {
          return <div key={index}>{item.name}</div>
        })}
      </section>
    </>
  )
}
export default ArrayMap
