import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"

// Model the application state.
function createTimer() {
  return makeAutoObservable({
    secondsPassed: 0,
    increase() {
      this.secondsPassed += 1
    },
    reset() {
      this.secondsPassed = 0
    },
  })
}

const myTimer = createTimer()

// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }) => (
  <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
))

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  myTimer.increase()
}, 1000)
export default function App() {
  return <TimerView timer={myTimer} />
}
