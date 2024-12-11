import { observable } from "mobx"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"

const TimerView = observer(() => {
  const [timer] = useState(() =>
    observable({
      secondsPassed: 0,
      increaseTimer() {
        this.secondsPassed++
      },
    }),
  )
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
