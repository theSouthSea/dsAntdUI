import { atom, useAtomValue, useSetAtom } from "jotai"

const aaaAtom = atom(0)

function Aaa() {
  const aaa = useAtomValue(aaaAtom)

  console.log("Aaa render...")

  return <div>{aaa}</div>
}

function Bbb() {
  const setAaa = useSetAtom(aaaAtom)

  console.log("Bbb render...")

  return (
    <div>
      <button onClick={() => setAaa(Math.random())}>按钮</button>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Aaa></Aaa>
      <Bbb></Bbb>
    </div>
  )
}
