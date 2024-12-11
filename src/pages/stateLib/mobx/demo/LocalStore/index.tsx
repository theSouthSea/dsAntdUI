import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"

import { Timer } from "../store"

const TimerView = observer(() => {
  const [timer] = useState(() => new Timer()) // Timer的定义在上面（正如上面所说的那样这里我们忽略了更新方法的定义·译者注）。
  useEffect(() => {
    const handle = setInterval(() => {
      timer.increaseTimer()
    }, 1000)
    return () => {
      clearInterval(handle)
    }
  }, [timer])
  return <span>Seconds passed: {timer.secondsPassed}</span>
})
export default TimerView
