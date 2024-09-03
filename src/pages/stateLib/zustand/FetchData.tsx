import { create } from "zustand"

async function getListById(id) {
  const data = {
    1: ["a1", "a2", "a3"],
    2: ["b1", "b2", "b3", "b4"],
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data[id])
    }, 2000)
  })
}

const useStore = create((set) => ({
  list: [],
  fetchData: async (param) => {
    const data = await getListById(param)
    set({ list: data })
  },
}))

export default function App() {
  const list = useStore((state) => state.list)
  const fetchListData = useStore((state) => state.fetchData)

  return (
    <div>
      <button onClick={() => fetchListData(1)}>列表111</button>
      <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}
