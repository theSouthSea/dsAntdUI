import { observer } from "mobx-react-lite"
import { useEffect } from "react"

import store from "../store"

//被`observer`包裹的函数式组件会被监听在它每一次调用前发生的任何变化
const TimerView = observer(({ timer }) => <span>Seconds passed: {timer.secondsPassed}</span>)

const App = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      store.increaseTimer()
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <TimerView timer={store} />
}
export default App
