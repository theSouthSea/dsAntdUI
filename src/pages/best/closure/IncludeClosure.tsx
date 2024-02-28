import React, { useCallback, useState } from "react"

interface HeavyComponentProps {
  title: string
  onClick: (val: any) => void
}
const HeavyComponent = ({ title, onClick }: HeavyComponentProps) => {
  console.log("HeavyComponent")
  return (
    <>
      <div>HeavyComponent</div>
      <div onClick={onClick}>title:{title}</div>
    </>
  )
}
const HeavyComponentMemo = React.memo(HeavyComponent, (before, after) => {
  return before.title === after.title
})

const Form = () => {
  const [value, setValue] = useState("")
  console.log("outer-value", value)
  const onClick = () => {
    // submit our form data here
    console.log(value)
  }
  // 为了缓存HeavyComponent组件,但是value变了,组件还是会更新
  // const onClick = useCallback(() => {
  //   // submit our form data here
  //   console.log(value)
  // }, [value])

  return (
    <>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <HeavyComponentMemo title="Welcome to the form" onClick={onClick} />
    </>
  )
}
export default Form
