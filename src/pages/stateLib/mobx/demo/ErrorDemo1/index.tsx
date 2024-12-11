import { observer } from "mobx-react-lite"
import { useEffect } from "react"

import store from "../store"

const TimerView = observer<{ secondsPassed: number }>(({ secondsPassed }) => {
  console.log("TimerView-secondsPassed=", secondsPassed)
  return <span>Seconds passed: {secondsPassed}</span>
})

const App = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      store.increaseTimer()
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  console.log("App-secondsPassed=", store.secondsPassed)
  return <TimerView secondsPassed={store.secondsPassed} />
}
// 不会更新
export default App
// 会更新
// export default observer(App)
