import { create } from "zustand"
import { persist } from "zustand/middleware"

const useXxxStore = create(
  persist(
    (set) => ({
      aaa: "",
      bbb: "",
      updateAaa: (value) => set(() => ({ aaa: value })),
      updateBbb: (value) => set(() => ({ bbb: value })),
    }),
    {
      name: "xxx-store",
    },
  ),
)

export default function App() {
  const updateAaa = useXxxStore((state) => state.updateAaa)
  const aaa = useXxxStore((state) => state.aaa)

  return (
    <div>
      <input onChange={(e) => updateAaa(e.currentTarget.value)} value={aaa} />
      <Bbb></Bbb>
    </div>
  )
}

function Bbb() {
  return (
    <div>
      <Ccc></Ccc>
    </div>
  )
}

function Ccc() {
  const aaa = useXxxStore((state) => state.aaa)
  return <p>hello, {aaa}</p>
}
