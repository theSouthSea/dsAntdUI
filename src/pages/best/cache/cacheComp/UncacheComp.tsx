import { useMemo, useState } from "react"

import useCount from "@/hooks/counter/useCount"

const UncacheComp = () => {
  const [step, setStep] = useState(0)
  const currentEle = useMemo(() => {
    if (step === 0) {
      return <Step1>1</Step1>
    } else if (step === 1) {
      return <Step2>2</Step2>
    }
  }, [step])
  return (
    <>
      {currentEle}
      <button onClick={() => setStep(step - 1)}>上一步</button>
      <button onClick={() => setStep(step + 1)}>下一步</button>
    </>
  )
}
const Step1 = (props: any) => {
  const { count, increment, decrement } = useCount()
  return (
    <>
      <div>Step1</div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}
const Step2 = (props: any) => {
  const { count, increment, decrement } = useCount()
  return (
    <>
      <div>Step2</div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}
export default UncacheComp
