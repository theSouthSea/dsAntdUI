import { atom, useAtom } from "jotai"

const aaaAtom = atom(0)

const bbbAtom = atom(0)
const sumAtom = atom((get) => get(aaaAtom) + get(bbbAtom))

function Aaa() {
  const [aaa, setAaa] = useAtom(aaaAtom)

  console.log("Aaa render...")
  return (
    <div>
      aaa: {aaa}
      <button onClick={() => setAaa(aaa + 1)}>加一</button>
    </div>
  )
}

function Bbb() {
  const [bbb, setBbb] = useAtom(bbbAtom)

  console.log("Bbb render...")

  return (
    <div>
      bbb: {bbb}
      <button onClick={() => setBbb(bbb + 1)}>加一</button>
    </div>
  )
}

export default function App() {
  const sum = useAtom(sumAtom)
  return (
    <div>
      <div>sum:{sum}</div>
      <Aaa></Aaa>
      <Bbb></Bbb>
    </div>
  )
}
