import { memo, useCallback, useEffect, useRef, useState } from "react"

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
const HeavyComponentMemo = memo(HeavyComponent)
type RefProps = () => void
const Form = () => {
  const [value, setValue] = useState("")
  const ref = useRef<RefProps>()

  useEffect(() => {
    ref.current = () => {
      // will be latest
      console.log(value)
    }
  })

  const onClick = useCallback(() => {
    // will be latest
    ref.current?.()
  }, [])

  return (
    <>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <HeavyComponentMemo title="Welcome closures" onClick={onClick} />
    </>
  )
}
export default Form
