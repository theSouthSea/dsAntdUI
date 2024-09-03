const arr = [
  {
    name: "海南",
    feature: "大海,温暖的气候,适合旅游",
  },
  {
    name: "海南",
    feature: "大海,温暖的气候,适合旅游",
  },
]
const KeyBug = () => {
  return (
    <>
      <div>KeyBug错误查找错误的源码</div>
      {arr.map((item) => {
        return <div>{item.name}</div>
      })}
    </>
  )
}
export default KeyBug
