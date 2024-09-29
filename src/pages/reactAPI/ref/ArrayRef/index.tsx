import { useRef } from "react"

const arr = ["aaa", "bbb", "ccc"]
const ArrayRef = () => {
  const ref = useRef<HTMLDivElement[]>([])
  const handleGetValue = () => {
    console.log(ref.current)
    const newArr = ref.current.map((item) => {
      return item.innerText
    })
    console.log("handleGetValue-newArr", newArr)
  }
  return (
    <>
      <div>ArrayRef</div>
      {arr.map((item, index) => {
        return (
          <div
            key={index}
            contentEditable
            ref={(dom) => (ref.current[index] = dom as HTMLDivElement)}
          >
            {item}
          </div>
        )
      })}
      <button onClick={handleGetValue}>获取修改后的值</button>
    </>
  )
}
export default ArrayRef
