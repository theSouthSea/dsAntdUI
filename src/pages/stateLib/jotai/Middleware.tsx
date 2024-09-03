import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const countAtom = atomWithStorage("count-key2", 0)

export default function App() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>加一</button>
    </div>
  )
}
