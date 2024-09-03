import { atom, useAtom } from "jotai"

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

const listAtom = atom([])

const fetchDataAtom = atom(null, async (get, set, param) => {
  const data = await getListById(param)
  set(listAtom, data)
})

export default function App() {
  const [, fetchListData] = useAtom(fetchDataAtom)
  const [list] = useAtom(listAtom)

  return (
    <div>
      <button onClick={() => fetchListData(2)}>列表222</button>
      <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}
