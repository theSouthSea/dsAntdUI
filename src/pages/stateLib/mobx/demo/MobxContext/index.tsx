import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"

import { MobxProvider, TimerContext } from "./Context"

const TimerView = observer(() => {
  // 从context中获取timer.
  const store = useContext(TimerContext) // 可以在上面查看 Timer的定义。
  useEffect(() => {
    const timer = setInterval(() => {
      store.increaseTimer()
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [store])
  return <span>Seconds passed: {store.secondsPassed}</span>
})
const App = () => {
  return (
    <MobxProvider>
      <TimerView />
    </MobxProvider>
  )
}
export default App
